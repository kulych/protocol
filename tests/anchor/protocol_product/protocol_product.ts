export type ProtocolProduct = {
  version: "0.1.0";
  name: "protocol_product";
  instructions: [
    {
      name: "createProduct";
      accounts: [
        {
          name: "product";
          isMut: true;
          isSigner: false;
        },
        {
          name: "commissionEscrow";
          isMut: false;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: "productTitle";
          type: "string";
        },
        {
          name: "commissionRate";
          type: "f64";
        },
      ];
    },
    {
      name: "updateProductCommissionEscrow";
      accounts: [
        {
          name: "product";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "productTitle";
          type: "string";
        },
        {
          name: "updatedCommissionEscrow";
          type: "publicKey";
        },
      ];
    },
    {
      name: "updateProductCommissionRate";
      accounts: [
        {
          name: "product";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "productTitle";
          type: "string";
        },
        {
          name: "updatedCommissionRate";
          type: "f64";
        },
      ];
    },
    {
      name: "updateProductAuthority";
      accounts: [
        {
          name: "product";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "updatedAuthority";
          isMut: true;
          isSigner: true;
        },
      ];
      args: [
        {
          name: "productTitle";
          type: "string";
        },
      ];
    },
  ];
  accounts: [
    {
      name: "product";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "payer";
            type: "publicKey";
          },
          {
            name: "commissionEscrow";
            type: "publicKey";
          },
          {
            name: "productTitle";
            type: "string";
          },
          {
            name: "commissionRate";
            type: "f64";
          },
        ];
      };
    },
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidCommissionRate";
      msg: "Product: commission rate must be >= 0 and <= 100.";
    },
    {
      code: 6001;
      name: "ProductTitleLen";
      msg: "Product: title length must be between 1 and 50 characters.";
    },
    {
      code: 6002;
      name: "CommissionPrecisionTooLarge";
      msg: "Product: Commission supports up to 3 decimal places.";
    },
  ];
};

export const IDL: ProtocolProduct = {
  version: "0.1.0",
  name: "protocol_product",
  instructions: [
    {
      name: "createProduct",
      accounts: [
        {
          name: "product",
          isMut: true,
          isSigner: false,
        },
        {
          name: "commissionEscrow",
          isMut: false,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "productTitle",
          type: "string",
        },
        {
          name: "commissionRate",
          type: "f64",
        },
      ],
    },
    {
      name: "updateProductCommissionEscrow",
      accounts: [
        {
          name: "product",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "productTitle",
          type: "string",
        },
        {
          name: "updatedCommissionEscrow",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updateProductCommissionRate",
      accounts: [
        {
          name: "product",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "productTitle",
          type: "string",
        },
        {
          name: "updatedCommissionRate",
          type: "f64",
        },
      ],
    },
    {
      name: "updateProductAuthority",
      accounts: [
        {
          name: "product",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "updatedAuthority",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "productTitle",
          type: "string",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "product",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "payer",
            type: "publicKey",
          },
          {
            name: "commissionEscrow",
            type: "publicKey",
          },
          {
            name: "productTitle",
            type: "string",
          },
          {
            name: "commissionRate",
            type: "f64",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidCommissionRate",
      msg: "Product: commission rate must be >= 0 and <= 100.",
    },
    {
      code: 6001,
      name: "ProductTitleLen",
      msg: "Product: title length must be between 1 and 50 characters.",
    },
    {
      code: 6002,
      name: "CommissionPrecisionTooLarge",
      msg: "Product: Commission supports up to 3 decimal places.",
    },
  ],
};
