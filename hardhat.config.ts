// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

// // hardhat.config.ts
// import { HardhatUserConfig } from "hardhat/types";
// const config: HardhatUserConfig = {};
// export default config;

import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import '@typechain/hardhat' 
const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: "0.8.17", settings: {} }],
  },
};
export default config;