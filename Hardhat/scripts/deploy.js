
const hre = require("hardhat");
async function main() {
  const LANDRegistry = await ethers.getContractFactory("LANDRegistry")

  // Start deployment, returning a promise that resolves to a contract object
  const mLANDRegistry = await LANDRegistry.deploy()
  await mLANDRegistry.deployed()
  console.log("Contract deployed to address:", mLANDRegistry.address)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
