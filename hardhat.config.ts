import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-foundry";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.28",
        settings: {
          evmVersion: `cancun`,
        },
      },
    ],
  },
};

export default config;
