require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.18",
      },
          {
        version: "0.4.21",
      },
          {
        version: "0.4.23",
      },
      {
        version: "0.4.24",
        settings: {},
        optimizer: {
          enabled: true,
          runs: 500
        }

      },
    ],
  },
   networks: {
      hardhat: {},
      ropsten: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
         
      }
   },
}
