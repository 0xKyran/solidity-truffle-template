// SPDX-License-Identifier: MIT
// 0xKyran contract v 1.0.0
pragma solidity ^0.8.0;

contract MyContract {
    string public name;
    constructor(string memory  _name) {
        name = _name;
    }
    function changeName(string memory _name) public {
        name = _name;
    }
    function getName() public view returns (string memory) {
        return name;
    }
}