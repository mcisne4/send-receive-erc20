// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Template {
	string public name = "Template";

	function setName(string memory _name) external {
		name = _name;
	}

	function getName() external view returns (string memory) {
		return name;
	}
}
