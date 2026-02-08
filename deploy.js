const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const AlienToken = await hre.ethers.getContractFactory("AlienToken");
  const token = await AlienToken.deploy();
  await token.deployed();

  console.log("AlienToken deployed at:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

