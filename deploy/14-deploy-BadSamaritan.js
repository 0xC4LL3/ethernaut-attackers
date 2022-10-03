const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const badSamaritan = await deploy("BadSamaritan", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`BadSamaritan deployed at ${badSamaritan.address}`)
}

module.exports.tags = ["goodsamaritan", "all"]
