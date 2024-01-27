// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.9;
import "hardhat/console.sol";
contract Fallback {

    event receivedCalled(address Sender, uint Value);
    event fallbackCalled(address Sender, uint Value, bytes Data);

    receive() external payable {
        console.log("I am in receive");
        emit receivedCalled(msg.sender, msg.value);
    }

    // fallback
    fallback() external payable{
        console.log("I am in fallback");
        emit fallbackCalled(msg.sender, msg.value, msg.data);
    }
}