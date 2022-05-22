# Contract that can Send and Receive ERC20 Tokens

## Concept

The `Token` contract holds a standard ERC20 token contract. The `Transfer` contract is then able to transfer a user's ERC20 tokens to and from the contract.

To receive ERC20 tokens, a user must fist approve the `Transfer` contract to spend `x` amount of tokens. That condition met, a user can then transfer up to `x` amount of tokens to the `Transfer` contract using the `requestTokens()` function. The `Transfer` contract records how much tokens the user has deposited into the contract.

To retrieve tokens, a user can execute the `sendTokens()` function to transfer tokens from the `Transfer` contract back to the user's account. A user can only retrieve the amount of tokens that they have deposited.

**Note:** The `Transfer` contract can only accept `Token` tokens, and only through the use of the `requestTokens()` function. The contract does not have access to tokens sent to the contract's address directly.

## Installation

```bash
yarn install
```

## Directories

-   `contracts/` - Directory for the Solidiy smart contracts
-   `deploy/` - Directory for the deployment scripts
-   `test/` - Directory for unit tests

## NPM Scripts

### Hardhat Scripts:

-   `clean` - To clear the cache and delete artifacts
-   `compile` - To compile your smart contracts
-   `node` - Launches a local hardhat node
-   `test` - Runs smart contract tests
-   `deploy` - Runs your deployment scripts

### Hardhat Watcher Scripts

-   `recompile` - Watches for file changes in the `contracts/` directory and runs `hardhat compile` as needed
-   `retest` - Watches for `*.test.js` file chanes in the `test/` directory and runs `hardhat test` as needed
-   `redeploy` - Watches for file changes in the `deploy/` directory and runs `hardhat deploy` as needed
