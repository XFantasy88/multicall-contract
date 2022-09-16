require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: {
    dogetest: {
      url: process.env.DOGE_TESTNET_RPC_URL,
      chainId: 568,
      accounts: [process.env.PRIVATE_KEY],
      timeout: 600000000
    }
  }
};
