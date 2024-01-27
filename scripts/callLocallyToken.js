//npx hardhat help
//npx hardhat test
//REPORT_GAS=true npx hardhat test
//npx hardhat node
//npx hardhat run scripts/deploy.ts
//Run npa hardhat node is a shell
//Run below with this command in separate shell : npx hardhat run --network localhost scripts/callLocalToken.js

const { ethers } = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.attach("0x610178da211fef7d417bc0e6fed39f05609ad788");
  const bal = await token.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  console.log("Balance is ",bal.toString())

  // Rest of your code
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

