// npx hardhat help
// npx hardhat test
// REPORT_GAS=true npx hardhat test
// npx hardhat node
// npx hardhat run scripts/deploy.ts

// 1) Run npa hardhat node is a shell ->
//    npx hardhat node
// 2) npx hardhat run --network localhost scripts/deploy.ts
//    Note the address, it has to be used in the below code
// 3) Compile and deploy
//    npx hardhat run --network localhost scripts/deploy.js

// Optional:
// Run below with this command in a separate shell:
// npx hardhat run --network localhost scripts/callLocalToken.js

const { ethers } = require("hardhat");
//const { parseEther } = require("ethers/lib/utils");

async function main() {
  const Fallback = await ethers.getContractFactory("Fallback");
  const network = await ethers.provider.getNetwork();

  // Use the correct contract address based on the deployed address in your local network
  const contractAddress = "0x9a676e781a523b5d0c0e43731313a708cb607508"; // Replace with the actual contract address

  const fallback = await ethers.getContractAt("Fallback", contractAddress);

  console.log("In Fallback js")

  // Example values for parameters
  const parameter1 = "SomeValue1";
  const parameter2 = "SomeValue2";
  const amountInEther = 0.1;

  // Use the default account from the ethers object
  const [sender] = await ethers.getSigners();



  // Convert ether to wei using utils from ethers
  const amountInWei = ethers.parseEther(amountInEther.toString());

  try {
    // Example message data (replace with your own)
  const messageData = "0x12345678";
    // Send ethers to the contract
    const transaction = await sender.sendTransaction({
      to: contractAddress,
      value: amountInWei,
      data:messageData,
    });

    // Wait for the transaction to be mined
     // Wait for the transaction to be mined
     const receipt = await transaction.wait();

     console.log(`Successfully sent ${amountInEther} ethers to the contract.`);
     console.log('Transaction Hash:', transaction.hash);
 
     // Check if the transaction receipt has events
     if (receipt && receipt.logs) {
       // Loop through logs to find the events
       for (const log of receipt.logs) {
         const parsedLog = fallback.interface.parseLog(log);
         console.log('Event:', parsedLog);
       }
     } else {
       console.log('No events found in the transaction receipt.');
     }

    console.log(`Successfully sent ${amountInEther} ethers to the contract.`);
    console.log('Transaction Hash:', transaction.hash);
  } catch (error) {
    console.error('Error:', error);
  }
}

main().catch(console.error);
