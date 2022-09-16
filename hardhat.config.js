require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    dogetest: {
      url: 'https://rpc-testnet.dogechain.dog/',
      chainId: 568,
      accounts: [],
      timeout: 600000000
    }
  }
};
