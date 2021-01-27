# Supply chain 

## Synopsis

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow of coffee beans between sellers and buyers totalling 4 actors: Farmer, Distributor, Retailer and Consumer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.
The asset (coffee beans) goes through the following states from farmer to consumer: Harvested, Processed, Packed, ForSale, Sold, Shipped, Received and Purchased.


## Contracts

| Entity        | Hash/Address           | Etherscan Link  |
| ------------- |:-------------:| -----:|
| SupplyChain Transaction     | 0x10d8957c358e789aacc1fca11e7645897aa8d1c9e8cb5c740ea0abc0f4764075 | https://rinkeby.etherscan.io/tx/0x10d8957c358e789aacc1fca11e7645897aa8d1c9e8cb5c740ea0abc0f4764075 |
| Supply Chain Contract      |   0xC1be8BB88Cd34D39B132ff8efc15D75885B575F0    | https://rinkeby.etherscan.io/address/0xc1be8bb88cd34d39b132ff8efc15d75885b575f0 |
| Deployer Address | 0x2569a3f96e5fe5bdf4260729d64fd1e044512e70  |  https://rinkeby.etherscan.io/address/0x2569a3f96e5fe5bdf4260729d64fd1e044512e70 |
|ConsumerRole|0xa6Ca19DCDe0779F09c0Cb33Aa4f766E02AB0CED9|https://rinkeby.etherscan.io/address/0xa6Ca19DCDe0779F09c0Cb33Aa4f766E02AB0CED9|
|RetailerRole|0x93c51e9559914ff17423d870C852B83600D3120E|https://rinkeby.etherscan.io/address/0x93c51e9559914ff17423d870C852B83600D3120E|
|DistributorRole|0x030f46977B5708870A18f286e71353CFBc5c30d8|https://rinkeby.etherscan.io/address/0x030f46977B5708870A18f286e71353CFBc5c30d8|
|FarmerRole|0x886e81521CE8f54150954F0Bb53810C37597e3Cc|https://rinkeby.etherscan.io/address/0x886e81521CE8f54150954F0Bb53810C37597e3Cc|

## Libraries
| Library        | Version           | Purpose  |
| ------------- |:-------------:| -----:|
| web3 |  1.3.3 | specifically for web3 utils|
| @truffle/hdwallet-provider | 1.2.1 | Deploying the contracts to rinkeby public test network |
| @truffle/contract | 4.3.5 | Injected in index.html. Other truffle-conract.js was erred/buggy |


The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/transaction_history_supplychain.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
