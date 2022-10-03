const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const forced = await deploy("Forced", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Forced deployed at ${forced.address}`)
}

module.exports.tags = ["force", "all"]
