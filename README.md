

Description:

Decentraland is a 3D virtual world platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain.

#  Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
Setup Hardhat Project

1. npm install --save-dev hardhat

2. npx hardhat

3. Create Deploy.js to deploy contract 

4. Add .env that include Ropsten test "PUBLIC_KEY" "PRIVATE_KEY" 

    "API_URL" - this using infura API @ https://infura.io/

5. Update Harhat.config file with .env const. and the Solidity version 

    to match the contracts pragma.

6. npm install "dotenv" and "@nomiclabs/hardhat-ethers" 

    "openzeppelin-zos" "ethers"

7. update config file with multiple compilers to match contract files.

error: 
    Please replace LANDRegistry for one of these options wherever you are trying to read its artifact:

    contracts/estate/EstateStorage.sol:LANDRegistry
    contracts/land/LANDRegistry.sol:LANDRegistry

    SOLVED: adjust the contract name in the Estate contract

    Error HH606: The project cannot be compiled, see reasons below.

    The Solidity version pragma statement in these files doesn't match any of the configured compilers in your config. Change the pragma or configure additional compiler versions in your hardhat config.

    SOLVED: add multiple compilers


8. RUN:  npx hardhat run scripts/deploy.js --network ropsten

    error: ProviderError: max code size exceeded






CATALYST

Setting up a Catalyst Node on Ubuntu 20.4 using virtualbox


1. Install Docker

2. Install Docker-Compose

3. Add $USER to Docker Group

4. Verify Docker Install

5. Verify Docker-Compose Install

6. Stop Apache2

7. Install Git

8. Create Directory for Catalyst Source Code

9. Download Catalyst-Owner from Decentraland's Github

11. Edit Environment File .env

12. Create Storage Folder

13. Bridge the connection for the virtual machine 


Final message to confirm that the server is functioning:

// Catalyst server is up and running at http://localhost

https://www.reddit.com/r/decentraland/comments/m0xujc/decentralizing_decentraland_content_setting_up_a/