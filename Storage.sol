pragma solidity ^0.8.3;

contract Storage {
    uint256 private data;
    address public creator;

    constructor() {
        creator = address(msg.sender);
    }

    function setData(uint256 _data) public {
        data = _data;
    }

    function getData() public view returns (uint256) {
        return data;
    }
}
