// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IDetectionBot {
  function handleTransaction(address user, bytes calldata msgData) external;
}

contract FortaBot is IDetectionBot {
  function handleTransaction(address, bytes calldata) external override {
    bool alert;
    assembly {
      let origSender := calldataload(180)
      let
        vault
      := 0xE2E17304Cc86c8516bd9cc166a909D519218aF88000000000000000000000000
      if eq(origSender, vault) {
        alert := 1
        mstore(0x80, alert)
      }
    }
    if (alert) {
      address(0x18201E86dE9aB0F510e1Be0007e19AaB71dB2815).call(
        abi.encodeWithSignature(
          "raiseAlert(address)",
          0x7474658eDA4B4A635Cb13941E7b7f285eaB2e686
        )
      );
    }
  }
}
