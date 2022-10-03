const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const convert = await deploy("convert", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`convert deployed at ${convert.address}`)
}

module.exports.tags = ["convert", "all"]
