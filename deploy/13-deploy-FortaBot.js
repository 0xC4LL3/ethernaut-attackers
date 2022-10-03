const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const fortaBot = await deploy("FortaBot", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`FortaBot deployed at ${fortaBot.address}`)
}

module.exports.tags = ["doubleentrypoint", "all"]
