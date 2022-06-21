//interact.js
require("dotenv").config();
const { ethers } = require("ethers");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const contract = require("/Users/kevinaudiberti/Documents/GitHub/server/src/controllers/greenhacktoken.json");
console.log(JSON.stringify(contract));



// export const reward = async (amount_ghk, to) => {

//     // Provider
//     const provider = new ethers.providers.InfuraProvider(
//     (network = "maticmum"),
//     API_KEY
//     );
//     // Signer
//     const signer = new ethers.Wallet(PRIVATE_KEY, provider);
//     // Contract
//     const greenHackTokenContract = new ethers.Contract(
//     CONTRACT_ADDRESS,
//     contract,
//     signer
//     );


//   amount = ethers.utils.parseUnits(amount_ghk, "18");
//   const tx = await greenHackTokenContract.mint(to, amount);
//   console.log(amount_ghk + " GHK have been minted for " + to);
// }




export const reward = async () => {

    // ÒProvider
    const provider = new ethers.providers.InfuraProvider(
    "maticmum",
    API_KEY
    );
    // Signer
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    // Contract
    const greenHackTokenContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contract,
    signer
    );

    const amount_ghk ="5"
    const to = "0xa4437699EA5A31E85546fcc634f46E164E2D1246"
   const amount = ethers.utils.parseUnits(amount_ghk, "18");
  const tx = await greenHackTokenContract.mint(to, amount);
  console.log(amount_ghk + " GHK have been minted for " + to);

console.log("Hello")
}
