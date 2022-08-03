import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.11",
  networks: {
    mumbai: {
      url: process.env.REACT_APP_ALCHEMY_HTTPS,
      accounts: [process.env.WALLET_PRIVATE_KEY as any],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
