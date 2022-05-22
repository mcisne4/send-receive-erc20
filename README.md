# Hardhat Starter Template

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
