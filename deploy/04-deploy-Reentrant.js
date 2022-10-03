const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const reentrant = await deploy("Reentrant", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Reentrant deployed at ${reentrant.address}`)
}

module.exports.tags = ["reentrancy", "all"]
