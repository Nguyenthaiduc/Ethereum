// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    
    mapping(uint => uint) public aa; // slot 0
    mapping(address => uint) public bb; // slot 1

    //keccak256(key + slot)
    
    uint8 public a = 7; //1byte
    uint16 public b = 8; //2 bytes
    address public c = 0x61335f29b1fdA4d86f4cD0062b5d0E3D6E7FC693;
    bool d = true;  //1bytes
    uint64 public e = 15; //8 bytes
    // 32bytes all valus will be storages in slot 0


    uint256 public f = 200; //32 bytes -> slot 3
    uint8 public g = 40; //1 byte -> slot 4
    uint256 public h = 789; //32 bytes -> slot 5
 
    constructor(){
        aa[2] = 4;
        aa[3] = 10;

        bb[0x61335f29b1fdA4d86f4cD0062b5d0E3D6E7FC693] = 100;
    }
}


//0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000

//web3.eth.getStorageAt("")