const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const boom = await deploy("Boom", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Boom deployed at ${boom.address}`)
}

module.exports.tags = ["motorbike", "all"]
