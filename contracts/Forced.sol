//SPDX-License-Identifier: MIT

pragma solidity 0.6.0;

contract Forced {
  function die() public payable {
    selfdestruct(0x1473A3b9de72c463f17C3D745499E40eE1804D76);
  }
}
