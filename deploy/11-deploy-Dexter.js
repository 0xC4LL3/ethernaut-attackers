const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const dexter = await deploy("Dexter", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Dexter deployed at ${dexter.address}`)
}

module.exports.tags = ["dextwo", "all"]
