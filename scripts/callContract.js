//Run npa hardhat node is a shell
//Run below with this command in separate shell : npx hardhat run --network localhost scripts/callContract.js

const { ethers } = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.attach("0xe7f1725e7734ce288f8367e1bb143e90bb3f0512");
  const bal = await token.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  console.log("Balance is ",bal.toString())

  // Rest of your code
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

