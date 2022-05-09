// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    //storage variables
    //Funds mean Qũy Đầu Tư
    // uint public funds = 1000; //positive values only

    // int public counter = -10;
    // uint public test = 4294967295;

    //funds[0x12342....] = 500
    //funds[0x12342....] = 300
    //funds[0x12342....] = 200

    address[] private funders;

    //private -> can be accesible only within the smart contract
    //internal -> can be accesible within smart contracts and also derived smart contracts

    //this is a special function
    //it's called when you make a that doesn't specify
    //function name to call

    //External functiona are part of the contract interface
    //which mean they can be called via contract and other txs

    receive() external payable {}

    function addFunds() external payable {
        funders.push(msg.sender);
    }

    function getAllFunders() public view returns (address[] memory) {
        return funders;
    }

    //pure view

    function getFundersAtIndex(uint8 index) external view returns (address) {
        address[] memory _funders = getAllFunders();
        return _funders[index];
    }
}
