require('babel-register');
require('babel-polyfill');

const secrets = require('./secrets.json');

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = secrets.mnemonic;
var infura_apikey = secrets.infuraApiKey;

module.exports = {
  networks: {
    mainnet:{ 
      provider: function(){
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/" + infura_apikey)
      },
      gasPrice: 50000000000, // change gas price according to market conditions
      network_id: 1
    },
    rinkeby:{ 
      provider: function(){
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infura_apikey)
      },
      gasPrice: 25000000000,
      network_id: 4
    },
    ropsten:{ 
      provider: function(){
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/" + infura_apikey)
      },
      gasPrice: 25000000000,
      network_id: 3
    },    
    development: {
      host: "127.0.0.1",    // Localhost
      port: 8545,              // Standard Ganache port
      network_id: "*"      // Match any network id
    },
  },
  mocha: {
    reporter: 'eth-gas-reporter' // Disable for speed enable for gas reporting
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "^0.8.0", 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
