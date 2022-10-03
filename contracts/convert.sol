//SDPX-License-Identifier: MIT

pragma solidity 0.6.0;
pragma experimental ABIEncoderV2;

contract convert {
  function _uint(int256 n)
    public
    pure
    returns (
      uint16 x,
      uint32 y,
      uint64 z
    )
  {
    x = uint16(n);
    y = uint32(n);
    z = uint64(n);
  }

  function _int(int256 n)
    public
    pure
    returns (
      int16 x,
      int32 y,
      int64 z
    )
  {
    x = int16(n);
    y = int32(n);
    z = int64(n);
  }

  function toBytes(int256 x) public pure returns (bytes8 _bytes) {
    _bytes = bytes8(int64(x));
  }

  function bytesArray(bytes[] calldata data)
    external
    pure
    returns (bytes memory)
  {
    return data[0];
  }

  function mixedUint(bytes8 _bytes)
    public
    pure
    returns (
      uint32 x,
      uint16 y,
      uint64 z
    )
  {
    x = uint32(uint64(_bytes));
    y = uint16(uint64(_bytes));
    z = uint64(_bytes);
  }
}
