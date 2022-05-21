const { ethers } = require('hardhat')

async function deployContract(contract_name, params = []) {
    const Contract = await ethers.getContractFactory(contract_name)
    const contract = await Contract.deploy(...params)
    await contract.deployed()

    return contract
}

module.exports = deployContract
