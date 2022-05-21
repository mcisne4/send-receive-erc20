// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Transfer {
	IERC20 internal token;

	uint256 public total_balance;
	mapping(address => uint256) public balance;

	constructor(address token_address) {
		token = IERC20(token_address);
	}

	function requestTokens(uint256 _amount)
		external
		payable
	{
		require(_amount > 0, "amount is insufficient");
		require(
			token.balanceOf(msg.sender) >= _amount,
			"insufficient token balance"
		);
		token.transferFrom(
			msg.sender,
			address(this),
			_amount
		);
		balance[msg.sender] += _amount;
		total_balance += _amount;
	}

	function sendTokens(uint256 _amount) external payable {
		require(
			balance[msg.sender] >= _amount,
			"insufficient token balance"
		);
		balance[msg.sender] -= _amount;
		total_balance -= _amount;
		token.transfer(msg.sender, _amount);
	}
}
