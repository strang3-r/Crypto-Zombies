// https://eth-goerli.g.alchemy.com/v2/41ouRCHuN9ELfApR5ryfkdM7_9PULaB3

require('@nomiclabs/hardhat-waffle');
// require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/41ouRCHuN9ELfApR5ryfkdM7_9PULaB3',
      accounts: ['28e8659ccab911f33448bb14f0b22d589acd38b6cbfd801f58c154d93ef80a9b']
    }
  }
};


