const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const trespasserOne = await deploy("TrespasserOne", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`TrespasserOne deployed at ${trespasserOne.address}`)
}

module.exports.tags = ["gatekeeperone", "all"]
