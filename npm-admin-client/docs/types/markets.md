<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [CreateMarketResponse][1]
    *   [Properties][2]
*   [CreateMarketWithOutcomesAndPriceLadderResponse][3]
*   [OutcomePdaResponse][4]
    *   [Properties][5]
*   [OutcomeInitialisationResponse][6]
*   [OddsInitialisationResponse][7]
*   [OutcomePdasResponse][8]
    *   [Properties][9]
*   [OutcomeInitialisationsResponse][10]
    *   [Properties][11]
*   [AddPricesToOutcomeResponse][12]
    *   [Properties][13]
*   [BatchAddPricesToOutcomeResponse][14]
    *   [Properties][15]
*   [BatchAddPricesToOutcomes][16]
    *   [Properties][17]
*   [BatchAddPricesToOutcomesResponse][18]
    *   [Properties][19]
*   [ValidateMarketOutcomeTitles][20]
    *   [Properties][21]
*   [ValidateMarketOutcomePriceLadder][22]
    *   [Properties][23]
*   [ValidateMarketResponse][24]
    *   [Properties][25]
*   [MarketStatus][26]
    *   [initializing][27]
    *   [open][28]
    *   [locked][29]
    *   [readyForSettlement][30]
    *   [settled][31]
    *   [readyToClose][32]
*   [MarketAccount][33]
    *   [Properties][34]
*   [EpochTimeStamp][35]

## CreateMarketResponse

Type: {marketPk: PublicKey, tnxId: [string][36], market: [MarketAccount][33]}

### Properties

*   `marketPk` **PublicKey**&#x20;
*   `tnxId` **[string][36]**&#x20;
*   `market` **[MarketAccount][33]**&#x20;

## CreateMarketWithOutcomesAndPriceLadderResponse

Type: any

## OutcomePdaResponse

Type: {outcomeIndex: [number][37], outcomePda: PublicKey}

### Properties

*   `outcomeIndex` **[number][37]**&#x20;
*   `outcomePda` **PublicKey**&#x20;

## OutcomeInitialisationResponse

Type: any

## OddsInitialisationResponse

Type: any

## OutcomePdasResponse

Type: {outcomePdas: [Array][38]<[OutcomePdaResponse][4]>}

### Properties

*   `outcomePdas` **[Array][38]<[OutcomePdaResponse][4]>**&#x20;

## OutcomeInitialisationsResponse

Type: {outcomes: [Array][38]<[OutcomeInitialisationResponse][6]>}

### Properties

*   `outcomes` **[Array][38]<[OutcomeInitialisationResponse][6]>**&#x20;

## AddPricesToOutcomeResponse

Type: {priceLadder: [Array][38]<[number][37]>, tnxId: [string][36]}

### Properties

*   `priceLadder` **[Array][38]<[number][37]>**&#x20;
*   `tnxId` **[string][36]**&#x20;

## BatchAddPricesToOutcomeResponse

Type: {batches: [Array][38]<[AddPricesToOutcomeResponse][12]>}

### Properties

*   `batches` **[Array][38]<[AddPricesToOutcomeResponse][12]>**&#x20;

## BatchAddPricesToOutcomes

Type: {outcomeIndex: [number][37], outcomePda: PublicKey, batches: [Array][38]<[AddPricesToOutcomeResponse][12]>}

### Properties

*   `outcomeIndex` **[number][37]**&#x20;
*   `outcomePda` **PublicKey**&#x20;
*   `batches` **[Array][38]<[AddPricesToOutcomeResponse][12]>**&#x20;

## BatchAddPricesToOutcomesResponse

Type: {results: [Array][38]<[BatchAddPricesToOutcomes][16]>}

### Properties

*   `results` **[Array][38]<[BatchAddPricesToOutcomes][16]>**&#x20;

## ValidateMarketOutcomeTitles

Type: {outcomesValid: [boolean][39], missingOutcomes: [Array][38]<[string][36]>, additionalOutcomes: [Array][38]<[string][36]>}

### Properties

*   `outcomesValid` **[boolean][39]**&#x20;
*   `missingOutcomes` **[Array][38]<[string][36]>**&#x20;
*   `additionalOutcomes` **[Array][38]<[string][36]>**&#x20;

## ValidateMarketOutcomePriceLadder

Type: {priceLadderValid: [boolean][39], outcomePk: PublicKey, missingPrices: [Array][38]<[number][37]>, additionalPrices: [Array][38]<[number][37]>}

### Properties

*   `priceLadderValid` **[boolean][39]**&#x20;
*   `outcomePk` **PublicKey**&#x20;
*   `missingPrices` **[Array][38]<[number][37]>**&#x20;
*   `additionalPrices` **[Array][38]<[number][37]>**&#x20;

## ValidateMarketResponse

Type: {outcomesValid: [boolean][39], priceLaddersValid: [boolean][39], marketValid: [boolean][39], missingOutcomes: [Array][38]<[string][36]>, additionalOutcomes: [Array][38]<[string][36]>, priceLadderValidation: [Array][38]<[ValidateMarketOutcomePriceLadder][22]>}

### Properties

*   `outcomesValid` **[boolean][39]**&#x20;
*   `priceLaddersValid` **[boolean][39]**&#x20;
*   `marketValid` **[boolean][39]**&#x20;
*   `missingOutcomes` **[Array][38]<[string][36]>**&#x20;
*   `additionalOutcomes` **[Array][38]<[string][36]>**&#x20;
*   `priceLadderValidation` **[Array][38]<[ValidateMarketOutcomePriceLadder][22]>**&#x20;

## MarketStatus

### initializing

Type: Record<[string][36], never>

### open

Type: Record<[string][36], never>

### locked

Type: Record<[string][36], never>

### readyForSettlement

Type: Record<[string][36], never>

### settled

Type: Record<[string][36], never>

### readyToClose

Type: Record<[string][36], never>

## MarketAccount

Type: {authority: BN, decimalLimit: [number][37], escrowAccountBump: [number][37], eventAccount: PublicKey, marketLockTimestamp: BN, marketOutcomesCount: [number][37], marketSettleTimestamp: BN?, marketStatus: [MarketStatus][26], marketType: [string][36], marketWinningOutcomeIndex: [number][37]?, mintAccount: PublicKey, published: [boolean][39], suspended: [boolean][39], title: [string][36]}

### Properties

*   `authority` **BN**&#x20;
*   `decimalLimit` **[number][37]**&#x20;
*   `escrowAccountBump` **[number][37]**&#x20;
*   `eventAccount` **PublicKey**&#x20;
*   `marketLockTimestamp` **BN**&#x20;
*   `marketOutcomesCount` **[number][37]**&#x20;
*   `marketSettleTimestamp` **BN?**&#x20;
*   `marketStatus` **[MarketStatus][26]**&#x20;
*   `marketType` **[string][36]**&#x20;
*   `marketWinningOutcomeIndex` **[number][37]?**&#x20;
*   `mintAccount` **PublicKey**&#x20;
*   `published` **[boolean][39]**&#x20;
*   `suspended` **[boolean][39]**&#x20;
*   `title` **[string][36]**&#x20;

## EpochTimeStamp

Type: [number][37]

[1]: #createmarketresponse

[2]: #properties

[3]: #createmarketwithoutcomesandpriceladderresponse

[4]: #outcomepdaresponse

[5]: #properties-1

[6]: #outcomeinitialisationresponse

[7]: #oddsinitialisationresponse

[8]: #outcomepdasresponse

[9]: #properties-2

[10]: #outcomeinitialisationsresponse

[11]: #properties-3

[12]: #addpricestooutcomeresponse

[13]: #properties-4

[14]: #batchaddpricestooutcomeresponse

[15]: #properties-5

[16]: #batchaddpricestooutcomes

[17]: #properties-6

[18]: #batchaddpricestooutcomesresponse

[19]: #properties-7

[20]: #validatemarketoutcometitles

[21]: #properties-8

[22]: #validatemarketoutcomepriceladder

[23]: #properties-9

[24]: #validatemarketresponse

[25]: #properties-10

[26]: #marketstatus

[27]: #initializing

[28]: #open

[29]: #locked

[30]: #readyforsettlement

[31]: #settled

[32]: #readytoclose

[33]: #marketaccount

[34]: #properties-11

[35]: #epochtimestamp

[36]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[38]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[39]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
