require('@nomiclabs/hardhat-ethers')
require('ethereum-waffle')
const { expect } = require('chai')

const deployContract = require('./lib/deployContract')

describe('Template Contract:', () => {
	let templateContract
	let name

	beforeEach(async function () {
		templateContract = await deployContract('Template')
	})

	describe('Initial State', () => {
		it("'getName()' should return: 'Template'", async () => {
			name = await templateContract.getName()
			expect(name).to.equal('Template')
		})
	})

	describe('Change State', () => {
		it("'setName('Renamed Template')' should not revert", async () => {
			const tx = templateContract.setName(
				'Renamed Template'
			)
			await expect(tx).to.not.be.reverted
		})
		it("'getName()' should return: 'Renamed Template'", async () => {
			await templateContract.setName(
				'Renamed Template'
			)
			name = await templateContract.getName()
			expect(name).to.equal('Renamed Template')
		})
	})
})
