//interact.js
require("dotenv").config();
const { ethers } = require("ethers");
const API_KEY_INFURA = process.env.API_KEY_INFURA;
const PRIVATE_KEY_SIGNER = process.env.PRIVATE_KEY_SIGNER;
const CONTRACT_ADDRESS_ERC20_GHK = process.env.CONTRACT_ADDRESS_ERC20_GHK;
const abi = require('../../src/controllers/GreenhackTokenContractABI.json');



// export const reward = async (amount_ghk, to) => {

//     // Provider
//     const provider = new ethers.providers.InfuraProvider(
//     (network = "maticmum"),
//     API_KEY_INFURA
//     );
//     // Signer
//     const signer = new ethers.Wallet(PRIVATE_KEY_SIGNER, provider);
//     // Contract
//     const greenHackTokenContract = new ethers.Contract(
//     CONTRACT_ADDRESS_ERC20_GHK,
//     contract,
//     signer
//     );


//   amount = ethers.utils.parseUnits(amount_ghk, "18");
//   const tx = await greenHackTokenContract.mint(to, amount);
//   console.log(amount_ghk + " GHK have been minted for " + to);
// }




export const reward = async (amount_ghk, to) => {



    // ÒProvider
    const provider = new ethers.providers.InfuraProvider(
    "maticmum",
    API_KEY_INFURA
    );
    // Signer
    const signer = new ethers.Wallet(PRIVATE_KEY_SIGNER, provider);
    // Contract
    const greenHackTokenContract = new ethers.Contract(
    CONTRACT_ADDRESS_ERC20_GHK,
    abi,
    signer
    );

   const amount = ethers.utils.parseUnits(amount_ghk, "18");
  const tx = await greenHackTokenContract.mint(to, amount);
  console.log(amount_ghk + " GHK have been minted for " + to);

}
