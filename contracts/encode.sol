//SDPX-License-Identifier: MIT

pragma solidity 0.6.0;
pragma experimental ABIEncoderV2;

contract encode {
  function encodeData(string memory payload)
    public
    pure
    returns (bytes memory encodedPayload)
  {
    encodedPayload = abi.encodeWithSignature(payload);
  }
}
