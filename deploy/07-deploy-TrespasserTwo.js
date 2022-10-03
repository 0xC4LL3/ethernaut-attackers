const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const trespasserTwo = await deploy("TrespasserTwo", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`TrespasserTwo deployed at ${trespasserTwo.address}`)
}

module.exports.tags = ["gatekeepertwo", "all"]
