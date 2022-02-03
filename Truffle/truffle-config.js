  
require('babel-register')
require('babel-polyfill')
require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider')

const createWalletProvider = (mnemonic, rpcEndpoint) =>
  new HDWalletProvider(mnemonic, rpcEndpoint)

const createInfuraProvider = (network = 'ropsten') =>
  createWalletProvider(
    process.env.MNEMONIC || '',
    `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
  )

module.exports = {
  compilers: {
  solc: {
    version : "0.4.18",
    version : "0.4.21",
    version : "0.4.23",
    version : "0.4.24",
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
  },
  networks: {
    livenet: {
      host: 'localhost',
      port: 8545,
      gas: 7000000,
      network_id: '*'
    },
    development: {
      host: 'localhost',
      port: 8545,
      gas: 20000000000,
      gasPrice:6721975 ,
      network_id: '*'
    },
    ropsten: {
      host: 'localhost',
      from: '0x35E95CFa48001B9025b560D0865E4F8540313d8d', 
      port: 8545,
      network_id: 3,
      gas: 30000000
    },
    infura_mainnet: {
      provider: () => createInfuraProvider('mainnet'),
      network_id: 1,
      gas: 30000000
    },
    infura_ropsten: {
      provider: () => createInfuraProvider('ropsten'),
      network_id: 3,
      gas: 30000000
    }
  }
}
