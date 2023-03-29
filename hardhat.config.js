require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    goerilya:{
      url: process.env.HTTPS_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
  }
};
