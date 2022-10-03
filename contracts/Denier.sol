// SPDX-License-Identifier: MIT

pragma solidity 0.6.0;

contract Denier {
  function deny() internal {
    deny();
  }

  fallback() external payable {
    deny();
  }
}
