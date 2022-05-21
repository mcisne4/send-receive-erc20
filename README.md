# Hardhat Starter Template

## Installation

```bash
npx degit github:mcisne4/template-hardhat my-project
cd my-project
yarn install
```

## Directories

-   `contracts/` - Directory for the Solidiy smart contracts
-   `deploy/` - Directory for the deployment scripts
-   `test/` - Directory for unit tests

## Libraries Used

-   **hardhat** - Smart contract development environment
-   **hardhat-deploy** - To simplify smart contract deployment
-   **hardhat-watcher** - To watch for file changes and restart hardhat actions
-   **chai** - For testing
-   **dotenv** - To store sensitive data
-   **prettier** - For code formatting

## Networks

### Local Networks

-   `hardhat` - _Default_. Uses the local hardhat network
-   `localhost` - Uses the local hardhat network
-   `ganache` - Uses a running Ganache GUI network
    -   _Note:_ You might need to update the _Network ID_ inside of Ganache to match that of hardhat _(_`31337`_)_

### Adding Other Networks

```js
// File: 'hardhat.config.js'

module.exports = {
    networks: [
        network_name: {
            url: process.env.NETWORK_RPC_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: process.env.NETWORK_CHAIN_ID
        }
    ]
}
```

#### Common Networks:

| Name                     | ChainID |
| ------------------------ | ------- |
| Ethereum Mainnet         | `1`     |
| Binance Smart Chain      | `56`    |
| Avalance C-Chain         | `43114` |
| Polygon Mainnet          | `137`   |
| Rinkeby Ethereum Testnet | `4`     |
| Ropsten Ethereum Testnet | `3`     |
| Mumbai Polygon Testnet   | `80001` |

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
