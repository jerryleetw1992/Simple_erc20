var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "flush aisle nut attract rally install token result grief faculty pistol mask";
var infura_url = "https://rinkeby.infura.io/v3/403c3784d895493ab8b2fe927f67d5b4";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_url)
      },
      network_id: "*"
    }
  }
};