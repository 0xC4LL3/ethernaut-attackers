const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const encode = await deploy("encode", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`encode deployed at ${encode.address}`)
}

module.exports.tags = ["encode", "all"]
