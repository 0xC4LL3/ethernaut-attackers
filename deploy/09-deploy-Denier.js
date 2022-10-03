const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const denier = await deploy("Denier", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Denier deployed at ${denier.address}`)
}

module.exports.tags = ["denial", "all"]
