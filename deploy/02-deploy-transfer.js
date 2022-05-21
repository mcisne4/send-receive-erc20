const { ethers } = require('hardhat')

module.exports = async (
	hre = { getNamedAccounts, deployments, network }
) => {
	const { deploy, log } = deployments
	const tokenContract = await ethers.getContract('Token')

	// --- Get Accounts ---
	const { deployer, user1, user2, user3 } =
		await getNamedAccounts()

	// --- Deploy Contract ---
	const templateContract = await deploy('Transfer', {
		from: deployer,
		args: [tokenContract.address],
		log: true
	})
	log('\nTransfer contract deployed')
	log(`   Contract Address: ${templateContract.address}`)
	log(`   Deployer: ${deployer}\n`)
}

module.exports.tags = ['All', 'Transfer']
