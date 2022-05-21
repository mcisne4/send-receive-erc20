const { network } = require('hardhat')

module.exports = async (
	hre = { getNamedAccounts, deployments, network }
) => {
	const { deploy, log } = deployments

	// --- Get Accounts ---
	const { deployer, user1, user2, user3 } =
		await getNamedAccounts()

	// --- Deploy Contract ---
	const templateContract = await deploy('Token', {
		from: deployer,
		args: [],
		log: true
	})
	log('\nToken deployed')
	log(`   Contract Address: ${templateContract.address}`)
	log(`   Deployer: ${deployer}\n`)
}

module.exports.tags = ['All', 'Token']
