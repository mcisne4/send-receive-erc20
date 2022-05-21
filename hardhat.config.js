require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('hardhat-deploy')
require('hardhat-watcher')

module.exports = {
	defaultNetwork: 'hardhat',
	networks: {
		hardhat: { chainId: 31337 },
		localhost: { chainId: 31337 }
	},
	solidity: {
		version: '0.8.9',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},
	namedAccounts: {
		deployer: {
			default: 0
		},
		user1: {
			default: 1
		},
		user2: {
			default: 2
		},
		user3: {
			default: 3
		}
	},
	watcher: {
		retest: {
			tasks: [
				{
					command: 'test',
					params: {
						testFiles: ['{path}']
					}
				}
			],
			files: ['./test/**.*test.js'],
			verbose: true
		},
		recompile: {
			tasks: ['compile'],
			files: ['./contracts'],
			verbose: true
		},
		redeploy: {
			tasks: ['deploy'],
			files: ['./deploy'],
			verbose: true
		}
	}
}
