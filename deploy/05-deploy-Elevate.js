const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const elevate = await deploy("Elevate", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Elevate deployed at ${elevate.address}`)
}

module.exports.tags = ["elevator", "all"]
