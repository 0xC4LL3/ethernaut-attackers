const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const cheapBuyer = await deploy("CheapBuyer", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`CheapBuyer deployed at ${cheapBuyer.address}`)
}

module.exports.tags = ["shop", "all"]
