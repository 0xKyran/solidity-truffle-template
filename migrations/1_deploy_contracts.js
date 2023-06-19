
// load in artifacts
const contract = artifacts.require('MyContract')

module.exports = async function(deployer, network, accounts) {

    // Deploy contract
    await deployer.deploy(contract, "ExampleContract")
  }