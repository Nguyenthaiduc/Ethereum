// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//they can not inherit from other smart contract
//they can only inherit other interface

//They can not declare a constructor
//they can not declare state variables
//all declare 

interface IFaucet {

    function addFunds() external payable;
    function withdraw(uint withdrawAmount) external payable;

  
}