const { deployments, ethers } = require('hardhat')
const { expect } = require('chai')

const { parseEther } = require('ethers/lib/utils')

describe('1. Initial State', () => {
	let tokenContract
	let transferContract
	let user1
	let user2
	let user3

	beforeEach(async () => {
		// --- Deployment Scripts ---
		await deployments.fixture(['All'])

		// --- Get Contracts ---
		tokenContract = await ethers.getContract('Token')
		transferContract = await ethers.getContract(
			'Transfer'
		)

		// --- Get Accounts ---
		const accounts = await ethers.getSigners()
		user1 = accounts[1]
		user2 = accounts[2]
		user3 = accounts[3]
	})

	describe('Token Contract:', () => {
		it("'user1' should have a balance of 0 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user1.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user2' should have a balance of 0 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user2.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user3' should have a balance of 0 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user3.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
	})
	describe('Transfer Contract:', () => {
		it("'total_balance' should be 0", async () => {
			const balance =
				await transferContract.total_balance()
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user1' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user1.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user2' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user2.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user3' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user3.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
	})
})

describe('2. Transfer Tokens to Users', () => {
	let tokenContract
	let transferContract
	let user1
	let user2
	let user3

	before(async () => {
		// --- Deployment Scripts ---
		await deployments.fixture(['All'])

		// --- Get Contracts ---
		tokenContract = await ethers.getContract('Token')
		transferContract = await ethers.getContract(
			'Transfer'
		)

		// --- Get Accounts ---
		const accounts = await ethers.getSigners()
		user1 = accounts[1]
		user2 = accounts[2]
		user3 = accounts[3]

		// --- Transfer Tokens to Users ---
		await tokenContract.transfer(
			user1.address,
			parseEther('200')
		)
		await tokenContract.transfer(
			user2.address,
			parseEther('300')
		)
		await tokenContract.transfer(
			user3.address,
			parseEther('400')
		)

		// --- Send Tokens to Contract ---
	})

	describe('Token Contract:', () => {
		it("'user1' should have a balance of 200 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user1.address
			)
			expect(balance.eq(parseEther('200'))).to.be.true
		})
		it("'user2' should have a balance of 300 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user2.address
			)
			expect(balance.eq(parseEther('300'))).to.be.true
		})
		it("'user3' should have a balance of 400 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user3.address
			)
			expect(balance.eq(parseEther('400'))).to.be.true
		})
	})
	describe('Transfer Contract:', () => {
		it("'total_balance' should be 0", async () => {
			const balance =
				await transferContract.total_balance()
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user1' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user1.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user2' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user2.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user3' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user3.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
	})
})

describe("3. Transfer ERC20 to 'Transfer' Contract", () => {
	let tokenContract
	let transferContract
	let user1
	let user2
	let user3

	before(async () => {
		// --- Deployment Scripts ---
		await deployments.fixture(['All'])

		// --- Get Contracts ---
		tokenContract = await ethers.getContract('Token')
		transferContract = await ethers.getContract(
			'Transfer'
		)

		// --- Get Accounts ---
		const accounts = await ethers.getSigners()
		user1 = accounts[1]
		user2 = accounts[2]
		user3 = accounts[3]

		// --- Transfer Tokens to Users ---
		await tokenContract.transfer(
			user1.address,
			parseEther('200')
		)
		await tokenContract.transfer(
			user2.address,
			parseEther('300')
		)
		await tokenContract.transfer(
			user3.address,
			parseEther('400')
		)

		// --- Approve ---
		await tokenContract
			.connect(user1)
			.approve(
				transferContract.address,
				parseEther('100')
			)
		await tokenContract
			.connect(user2)
			.approve(
				transferContract.address,
				parseEther('200')
			)
		await tokenContract
			.connect(user3)
			.approve(
				transferContract.address,
				parseEther('300')
			)

		// --- Send Tokens to Contract ---
		await transferContract
			.connect(user1)
			.requestTokens(parseEther('100'))
		await transferContract
			.connect(user2)
			.requestTokens(parseEther('200'))
		await transferContract
			.connect(user3)
			.requestTokens(parseEther('300'))
	})

	describe('Token Contract:', () => {
		it("'user1' should have a balance of 100 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user1.address
			)
			expect(balance.eq(parseEther('100'))).to.be.true
		})
		it("'user2' should have a balance of 100 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user2.address
			)
			expect(balance.eq(parseEther('100'))).to.be.true
		})
		it("'user3' should have a balance of 100 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user3.address
			)
			expect(balance.eq(parseEther('100'))).to.be.true
		})
	})
	describe('Transfer Contract:', () => {
		it("'total_balance' should be 600", async () => {
			const balance =
				await transferContract.total_balance()
			expect(balance.eq(parseEther('600'))).to.be.true
		})
		it("'user1' should have a balance of 100", async () => {
			const balance = await transferContract.balances(
				user1.address
			)
			expect(balance.eq(parseEther('100'))).to.be.true
		})
		it("'user2' should have a balance of 200", async () => {
			const balance = await transferContract.balances(
				user2.address
			)
			expect(balance.eq(parseEther('200'))).to.be.true
		})
		it("'user3' should have a balance of 300", async () => {
			const balance = await transferContract.balances(
				user3.address
			)
			expect(balance.eq(parseEther('300'))).to.be.true
		})
	})
})

describe("4. Transfer ERC20 from 'Transfer' Contract", () => {
	let tokenContract
	let transferContract
	let user1
	let user2
	let user3

	before(async () => {
		// --- Deployment Scripts ---
		await deployments.fixture(['All'])

		// --- Get Contracts ---
		tokenContract = await ethers.getContract('Token')
		transferContract = await ethers.getContract(
			'Transfer'
		)

		// --- Get Accounts ---
		const accounts = await ethers.getSigners()
		user1 = accounts[1]
		user2 = accounts[2]
		user3 = accounts[3]

		// --- Transfer Tokens to Users ---
		await tokenContract.transfer(
			user1.address,
			parseEther('200')
		)
		await tokenContract.transfer(
			user2.address,
			parseEther('300')
		)
		await tokenContract.transfer(
			user3.address,
			parseEther('400')
		)

		// --- Approve ---
		await tokenContract
			.connect(user1)
			.approve(
				transferContract.address,
				parseEther('100')
			)
		await tokenContract
			.connect(user2)
			.approve(
				transferContract.address,
				parseEther('200')
			)
		await tokenContract
			.connect(user3)
			.approve(
				transferContract.address,
				parseEther('300')
			)

		// --- Send Tokens to Contract ---
		await transferContract
			.connect(user1)
			.requestTokens(parseEther('100'))
		await transferContract
			.connect(user2)
			.requestTokens(parseEther('200'))
		await transferContract
			.connect(user3)
			.requestTokens(parseEther('300'))

		// --- Sent Tokens from Contract ---
		await transferContract
			.connect(user1)
			.sendTokens(parseEther('100'))
		await transferContract
			.connect(user2)
			.sendTokens(parseEther('200'))
		await transferContract
			.connect(user3)
			.sendTokens(parseEther('300'))
	})

	describe('Token Contract:', () => {
		it("'user1' should have a balance of 200 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user1.address
			)
			expect(balance.eq(parseEther('200'))).to.be.true
		})
		it("'user2' should have a balance of 300 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user2.address
			)
			expect(balance.eq(parseEther('300'))).to.be.true
		})
		it("'user3' should have a balance of 400 Tokens", async () => {
			const balance = await tokenContract.balanceOf(
				user3.address
			)
			expect(balance.eq(parseEther('400'))).to.be.true
		})
	})
	describe('Transfer Contract:', () => {
		it("'total_balance' should be 0", async () => {
			const balance =
				await transferContract.total_balance()
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user1' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user1.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user2' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user2.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
		it("'user3' should have a balance of 0", async () => {
			const balance = await transferContract.balances(
				user3.address
			)
			expect(balance.eq(parseEther('0'))).to.be.true
		})
	})
})
