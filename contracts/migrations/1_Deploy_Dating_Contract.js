const Dating = artifacts.require('Dating')

module.exports = function (deployer, accounts) {
  // deployment steps
  deployer.deploy(
    Dating
  )
}