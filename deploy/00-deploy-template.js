const { network } = require('hardhat')

module.exports = async (
	hre = { getNamedAccounts, deployments, network }
) => {
	// console.log(deployments)
	const { deploy, log } = deployments

	// --- Get Accounts ---
	const { deployer, user1, user2, user3 } =
		await getNamedAccounts()

	// --- Deploy Contract ---
	const templateContract = await deploy('Template', {
		from: deployer,
		args: [],
		log: true,
		waitConfirmations: 1
	})
	log('\nTemplate contract deployed')
	log(`   Contract Address: ${templateContract.address}`)
	log(`   Network: '${network.name}'`)
	log(`   Deployer: ${deployer}`)
	log(`   User 1: ${user1}`)
	log(`   User 2: ${user2}`)
	log(`   User 3: ${user3}`)
}

module.exports.tags = ['Template']
