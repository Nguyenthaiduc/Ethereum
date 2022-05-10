// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Owned.sol";
import "./Logger.sol";

contract Faucet is Owned,Logger{
    //storage variables
    //Funds mean Qũy Đầu Tư
    // uint public funds = 1000; //positive values only

    // int public counter = -10;
    // uint public test = 4294967295;

    //funds[0x12342....] = 500
    //funds[0x12342....] = 300
    //funds[0x12342....] = 200
    
    uint public numOfFunders;


    mapping(address => bool) private funders;
    mapping(uint => address) private lutFunders;


    

    modifier limitWithdraw(uint withdrawAmount){
        require(
            withdrawAmount <= 10000000000000000,
             "Cannot withdraw more than 0.1 either" 
             );
             _;

    }

    receive() external payable {}
    function emitLog() public override pure returns(bytes32){
        return "Hello World";
    }

    function tranferOwnership(address newOwner) external onlyOwner{
        owner = newOwner;
    }


    //private -> can be accesible only within the smart contract
    //internal -> can be accesible within smart contracts and also derived smart contracts

    //this is a special function
    //it's called when you make a that doesn't specify
    //function name to call

    //External functiona are part of the contract interface
    //which mean they can be called via contract and other txs

    // receive() external payable {}

    function addFunds() external payable {
       address funder = msg.sender;

       if(!funders[funder]){
           uint index = numOfFunders++;
           funders[funder] = true;
           lutFunders[index] = funder;
       }
    }

    function withdraw(uint withdrawAmount) external limitWithdraw(withdrawAmount) {


        payable(msg.sender).transfer(withdrawAmount);
        }


    function test1() external onlyOwner{
        //some managing stuff that only admin should have access to 
    }
    


    //pure view

    function getAllFunders() external view returns(address[] memory){
        address[] memory _funders = new address[](numOfFunders);

        for(uint i = 0 ; i < numOfFunders ; i++){
            _funders[i] = lutFunders[i];
        }

        return _funders;


    }


    function getFundersAtIndex(uint8 index) external view returns (address) {
       
        return lutFunders[index];
    }
}

//const instance = await Faucet.deployed()
// instance.addFunds({from : accounts[0], value: "2000000000000000000"})
// instance.addFunds({from : accounts[1], value: "2000000000000000000"})
//instance.withdraw("100000000000000000",{from :  accounts[1]})
// instance.getFundersAtIndex(0)
// instance.getAllFunders()