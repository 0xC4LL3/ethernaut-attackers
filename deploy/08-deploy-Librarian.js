const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const librarian = await deploy("Librarian", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`Librarian deployed at ${librarian.address}`)
}

module.exports.tags = ["preservation", "all"]
