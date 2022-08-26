const hre = require('hardhat');
const fs = require('fs');
const path = require('path');

function saveFrontendFiles(contracts) {
   const contractsDir = path.join(__dirname, '/../..', 'src/shared/lib/contracts')
   console.log(contractsDir)
   // Object.entries(contracts).forEach((contract_item) => {
   //    const [name, contract] = contract_item;
   //
   //    if(contract) {
   //       fs.writeFileSync(
   //          path.join(contractsDir, '/', name + '-contract-address.json'),
   //          JSON.stringify({[name]: contract.address}, undefined, 2)
   //       )
   //    }
   //
   //    const ContractArtifact = hre.artifacts.readArtifactSync(name)
   //
   //    fs.writeFileSync(
   //       path.join(contractsDir, '/', name + ".json"),
   //       JSON.stringify(ContractArtifact, null, 2)
   //    )
   //
   //
   // })
}