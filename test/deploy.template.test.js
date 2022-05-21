const { deployments, ethers } = require('hardhat')
const { assert, expect } = require('chai')

describe('Template Contract:', () => {
	let templateContract
	let name

	beforeEach(async () => {
		await deployments.fixture('Template')
		templateContract = await ethers.getContract(
			'Template'
		)
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
