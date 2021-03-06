

Description:

# Decentraland is a 3D virtual world platform. Users may buy virtual plots of land in the platform as NFTs via the MANA cryptocurrency, which uses the Ethereum blockchain.

#  Hardhat Project

![image](https://user-images.githubusercontent.com/90293555/152398861-786d817d-1fc9-48d2-8953-1dee6594b38b.png)


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

![image](https://user-images.githubusercontent.com/90293555/152398880-2fd0390d-decf-4922-ab14-700d17875b17.png)


1. npm install --save-dev hardhat

2. npx hardhat

3. Create Deploy.js to deploy contract 

4. Add .env that include Ropsten test "PUBLIC_KEY" "PRIVATE_KEY" 

![image](https://user-images.githubusercontent.com/90293555/152398946-5ce5169e-47fb-4f98-bc66-bddf7b2ff067.png)


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
    
    SOLVED: update Hardhat config file compiler: compilers:
    [
      {
        version: "0.4.24",
        settings: {
         optimizer: {
           enabled: true,
           runs: 999999
         },
         evmVersion: "byzantium", 
         outputSelection: {
          "*": {
            "": [
              "ast"
            ],
            "*": [
              "evm.bytecode.object",
              "evm.deployedBytecode.object",
              "abi",
              "evm.bytecode.sourceMap",
              "evm.deployedBytecode.sourceMap",
              "metadata"
            ]
          },
        }
        }
      }
    ]
    
    

![img5](https://user-images.githubusercontent.com/90293555/152577652-4179a2e6-daaa-4c52-9405-022bae29aee6.jpg)


# Deployed to Ropsten testnet


![img6](https://user-images.githubusercontent.com/90293555/152579275-919adfa0-f6e8-48da-9823-6a1a30737f80.jpg)




![img7](https://user-images.githubusercontent.com/90293555/152579313-7b623dd0-fa76-4695-826c-ee1c5481b025.jpg)



![img8](https://user-images.githubusercontent.com/90293555/152579326-31aed49c-4c18-4643-996b-130ff832e5b6.jpg)



CATALYST

![image](https://user-images.githubusercontent.com/90293555/152398998-0056764a-7727-4283-b1d1-c42d5595882f.png)


Setting up a Catalyst Node on Ubuntu 20.4 using virtualbox


![image](https://user-images.githubusercontent.com/90293555/152399065-98ca1586-3a1d-4778-9a2c-c776208f997d.png)

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

error : 

![img](https://user-images.githubusercontent.com/90293555/152281203-7d45ae1b-2867-48af-ad98-f4f82c32773b.jpg)

SOLVED:

run mv .env-advanced.example .env-advanced in catalyst-owner  folder and then run mkdir storage

![img2](https://user-images.githubusercontent.com/90293555/152281600-9be61717-2a66-40d3-93bc-f2b71af3635a.jpg)

Final message to confirm that the server is functioning:

// Catalyst server is up and running at http://localhost


![img3](https://user-images.githubusercontent.com/90293555/152281785-51106824-b01b-49f2-b0b5-b5cabdcb5756.jpg)


![img4](https://user-images.githubusercontent.com/90293555/152284083-3f07befb-8fe9-4f8a-b416-fd5931f79107.jpg)


credit : https://www.reddit.com/r/decentraland/comments/m0xujc/decentralizing_decentraland_content_setting_up_a/
