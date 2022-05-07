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

    receive() external payable {}

}
