use anchor_lang::prelude::*;
use solana_program::clock::Clock;
use solana_program::sysvar::Sysvar;

use crate::context::MatchOrders;
use crate::error::CoreError;
use crate::instructions::matching::create_trade::initialize_trade;
use crate::instructions::{matching, order, transfer};
use crate::state::market_position_account::MarketPosition;

pub fn match_orders(ctx: &mut Context<MatchOrders>) -> Result<()> {
    let order_for = &mut ctx.accounts.order_for;
    let order_against = &mut ctx.accounts.order_against;

    // validate market
    let now = Clock::get().unwrap().unix_timestamp;
    require!(
        ctx.accounts.market.market_lock_timestamp > now,
        CoreError::MarketLocked
    );

    // validate orders market-outcome-price
    require!(
        order_for.market_outcome_index == order_against.market_outcome_index,
        CoreError::MatchingMarketOutcomeMismatch
    );

    require!(
        order_for.expected_price <= order_against.expected_price,
        CoreError::MatchingMarketPriceMismatch
    );

    // validate that status is open or matched (for partial matches)
    require!(!order_for.is_completed(), CoreError::StatusClosed);
    require!(!order_against.is_completed(), CoreError::StatusClosed);

    let selected_price = if order_for.creation_timestamp < order_against.creation_timestamp {
        order_for.expected_price
    } else {
        order_against.expected_price
    };

    // determine the matchable stake
    let stake_matched = order_for.stake_unmatched.min(order_against.stake_unmatched);

    let market_position_against = &mut ctx.accounts.market_position_against;
    let market_position_for = &mut ctx.accounts.market_position_for;
    // for orders from the same purchaser market-position passed is the same account
    let market_position_identical = market_position_against.key() == market_position_for.key();

    let change_in_exposure_refund_against;
    let change_in_exposure_refund_for;

    if order_against.creation_timestamp <= order_for.creation_timestamp {
        // 1. match against
        // -----------------------------
        change_in_exposure_refund_against = order::match_order(
            order_against,
            market_position_against,
            stake_matched,
            selected_price,
        )?;
        if market_position_identical {
            copy_market_position(market_position_against, market_position_for);
        }

        // 2. match for
        // -----------------------------
        change_in_exposure_refund_for = order::match_order(
            order_for,
            market_position_for,
            stake_matched,
            selected_price,
        )?;
        if market_position_identical {
            copy_market_position(market_position_for, market_position_against);
        }
    } else {
        // 1. match for
        // -----------------------------
        change_in_exposure_refund_for = order::match_order(
            order_for,
            market_position_for,
            stake_matched,
            selected_price,
        )?;
        if market_position_identical {
            copy_market_position(market_position_for, market_position_against);
        }
        // 2. match against
        // -----------------------------
        change_in_exposure_refund_against = order::match_order(
            order_against,
            market_position_against,
            stake_matched,
            selected_price,
        )?;
        if market_position_identical {
            copy_market_position(market_position_against, market_position_for);
        }
    };

    // 3. market update
    // -----------------------------
    matching::update_on_match(
        &mut ctx.accounts.market_outcome,
        &mut ctx.accounts.market_matching_pool_against,
        &mut ctx.accounts.market_matching_pool_for,
        &ctx.accounts.market.key(),
        stake_matched,
        order_for,
        order_against,
    )?;

    // 4. if any refunds are due to change in exposure, transfer them
    if change_in_exposure_refund_against > 0_u64 {
        transfer::order_against_matching_refund(ctx, change_in_exposure_refund_against)?;
    }
    if change_in_exposure_refund_for > 0_u64 {
        transfer::order_for_matching_refund(ctx, change_in_exposure_refund_for)?;
    }

    // 5. Initialize the trade accounts
    let now = Clock::get().unwrap().unix_timestamp;
    initialize_trade(
        &mut ctx.accounts.trade_against,
        &ctx.accounts.order_against,
        &ctx.accounts.trade_for,
        stake_matched,
        selected_price,
        now,
        ctx.accounts.crank_operator.key(),
    );
    initialize_trade(
        &mut ctx.accounts.trade_for,
        &ctx.accounts.order_for,
        &ctx.accounts.trade_against,
        stake_matched,
        selected_price,
        now,
        ctx.accounts.crank_operator.key(),
    );

    Ok(())
}

fn copy_market_position(from: &MarketPosition, to: &mut MarketPosition) {
    for index in 0..from.market_outcome_sums.len() {
        to.market_outcome_sums[index] = from.market_outcome_sums[index];
        to.outcome_max_exposure[index] = from.outcome_max_exposure[index];
    }
}
