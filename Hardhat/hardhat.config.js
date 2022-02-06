require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: {
    compilers: [
      {
        solc
        version: "0.4.24",
        settings: {
         optimizer: {
           enabled: true,
           runs: 999999
         }
        },
         evmVersion: "byzantium", 
         outputSelection: {
          "*": {
            "": [
              "ast"
            ],
            "*": [
              "evm.bytecode.object",
              "evm.deployedBytecode.object",
              "abi",
              "evm.bytecode.sourceMap",
              "evm.deployedBytecode.sourceMap",
              "metadata"
            ]
          },
        }
        }
      }
    ]
  },
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
         
      }
   },
}
