const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const coinFlipPredictor = await deploy("CoinFlipPredictor", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`CoinFlipPredictor deployed at ${coinFlipPredictor.address}`)
}

module.exports.tags = ["coinflip", "all"]
