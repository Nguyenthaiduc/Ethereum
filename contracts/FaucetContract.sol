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

    uint public numOfFunders;
    mapping(uint => address) private funders;

    //private -> can be accesible only within the smart contract
    //internal -> can be accesible within smart contracts and also derived smart contracts

    //this is a special function
    //it's called when you make a that doesn't specify
    //function name to call

    //External functiona are part of the contract interface
    //which mean they can be called via contract and other txs

    receive() external payable {}

    function addFunds() external payable {
       uint index = numOfFunders++;
       funders[index] = msg.sender;
    }


    //pure view

    function getAllFunders() external view returns(address[] memory){
        address[] memory _funders = new address[](numOfFunders);

        for(uint i = 0 ; i < numOfFunders ; i++){
            _funders[i] = funders[i];
        }

        return _funders;


    }


    function getFundersAtIndex(uint8 index) external view returns (address) {
       
        return funders[index];
    }
}

//const instance = await Faucet.deployed()
// instance.addFunds({from : accounts[0], value: "20000000"})
// instance.addFunds({from : accounts[1], value: "20000000"})
// instance.getFundersAtIndex(0)
// instance.getAllFunders()