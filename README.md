# solidity-truffle-template

This repository provides a starting point for building Ethereum smart contracts with Solidity. It includes a sample contract (`MyContract`), as well as setup for deployment scripts, testing with Chai, and Truffle configuration.

## Setup & Installation

1. Install [Node.js and npm](https://nodejs.org/en/download/).
2. Clone this repo to your local machine using `git clone git@github.com:0xKyran/solidity-truffle-template.git`.
3. Navigate to the project directory and run `npm install`.
4. Install [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation) globally with `npm install -g truffle`.
5. Install [Ganache](https://www.trufflesuite.com/ganache) - this provides a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

## Project Structure

- `./migrations/1_deploy_contracts.js` : Contains the deployment script for the `MyContract` smart contract. It deploys the contract with an initial name of "ExampleContract".

- `./src/contracts/MyContract.sol` : Contains the `MyContract` smart contract. The contract has a name property, which can be changed and fetched via the `changeName` and `getName` functions respectively.

- `./test/test.js` : Contains the tests for the `MyContract` smart contract. Uses the Chai assertion library for testing.

- `truffle-config.js` : Contains the Truffle configuration for the project, including compiler options and network definitions.

## Customizing the Contract

To create your own contract, edit the `MyContract.sol` file in the `./src/contracts/` directory. Use `MyContract` as a starting point for your contract.

## Compiling the Contract

Before deploying or running tests, you'll need to compile your contract. The Truffle suite will handle this for you. To compile your contracts, navigate to your project directory and run:

```bash
truffle compile
```

This command will compile all contracts in the ./src/contracts/ directory and output the results (including the ABI and bytecode) to the ./src/abis/ directory.

> Keep in mind that every time you modify your contract, you will need to recompile it before running tests or deploying it to a network.

## Running Tests

To write tests for your contract, modify the test.js file in the ./test/ directory. The tests use the Chai assertion library.

To run the tests, make sure you have a development blockchain running (like Ganache), and then execute:

```bash
truflle test
```

This will compile your contracts, deploy them to the development network, and run your tests.

## Deploying the Contract

In order to deploy your contract, replace the placeholder values in `truffle-config.js` with your actual API key. Then run:

also replace 

```bash
truffle migrate --network <network-name>
```
> Note: if you omit the `--network` flag, Truffle will deploy to the development network by default.

Replace <network-name> with the name of the network you want to deploy to (e.g., mainnet, rinkeby, ropsten, or development).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
