const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const throneLock = await deploy("ThroneLock", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`ThroneLock deployed at ${throneLock.address}`)
}

module.exports.tags = ["king", "all"]
