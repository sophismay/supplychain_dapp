const HDWalletProvider = require('@truffle/hdwallet-provider')
const infura_rinkeby = 'https://rinkeby.infura.io/v3/'
const fs = require('fs');
const rawConfig = fs.readFileSync(".config.json");
const _j = JSON.parse(rawConfig);
const infura_id = _j["infura_id"];
const mnemonic = _j["mnemonic"];
const address_index = 1; // use 2nd account

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `${infura_rinkeby}${infura_id}`, address_index),
      network_id: '4'
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};