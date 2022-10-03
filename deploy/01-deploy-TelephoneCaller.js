const { getNamedAccounts, deployments, network, ethers } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()

  const telephoneCaller = await deploy("TelephoneCaller", {
    from: deployer,
    args: [],
    log: true,
  })
  log(`TelephoneCaller deployed at ${telephoneCaller.address}`)
}

module.exports.tags = ["telephone", "all"]
