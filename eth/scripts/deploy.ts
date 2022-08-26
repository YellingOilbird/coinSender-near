import { ethers } from "hardhat";
import path from 'path';
import * as fs from "fs";
const hre = require('hardhat');

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = ethers.utils.parseEther("1");

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(`address - ${lock.address}`);

  saveFrontendFiles({
    Lock:lock
  })
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function saveFrontendFiles(contracts:any) {
  const contractsDir = path.join(__dirname, '/../..', 'src/shared/lib/contracts')

  Object.entries(contracts).forEach((contract_item:any) => {
    const [name, contract] = contract_item;

    if(contract) {
      fs.writeFileSync(
         path.join(contractsDir, '/', name + '-contract-address.json'),
         JSON.stringify({[name]: contract.address}, undefined, 2)
      )
    }

    const ContractArtifact = hre.artifacts.readArtifactSync(name)

    fs.writeFileSync(
       path.join(contractsDir, '/', name + ".json"),
       JSON.stringify(ContractArtifact, null, 2)
    )


  })
}