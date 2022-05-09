// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    uint8 public a = 7; //1byte
    uint16 public b = 8; //2 bytes
    address public c = 0x61335f29b1fdA4d86f4cD0062b5d0E3D6E7FC693;
    bool d = true;  //1bytes
    uint64 public e = 15; //8 bytes
    // 32bytes all valus will be storages in slot 0


    uint256 public f = 200; //32 bytes -> slot 1
    uint8 public g = 40; //1 byte -> slot 2
    uint256 public h = 789; //32 bytes -> slot 3
 
}