//EXTERNAL_SMART_CONTRACT_ADDRESS
const hre = require("hardhat");

async function main() {  
  const Winner = await hre.ethers.getContractFactory("ContractWinner");
  const winner = await Winner.deploy();

  await winner.deployed();

  console.log(
    `deployed to ${winner.address}`
  );
  
  const txn = await winner.seeTheWinner(process.env.EXTERNAL_SMART_CONTRACT_ADDRESS);
  console.log(txn);
  
//   deployed to 0x4f5533372e8A807d2A4759C2993f68D44160E3D7
// {
//   hash: '0x0aeb1abcf9624c7825d7be1aa22239f42943adb02975cb1715fdb3a2d088ba6c',
//   type: 2,
//   accessList: [],
//   blockHash: null,
//   blockNumber: null,
//   transactionIndex: null,
//   confirmations: 0,
//   from: '0xf5b261c0590FeCd87d79Ad1c5C18bd4AAFC69dDd',
//   gasPrice: BigNumber { value: "137008657354" },
//   maxPriorityFeePerGas: BigNumber { value: "1500000000" },
//   maxFeePerGas: BigNumber { value: "137008657354" },
//   gasLimit: BigNumber { value: "26098" },
//   to: '0x4f5533372e8A807d2A4759C2993f68D44160E3D7',
//   value: BigNumber { value: "0" },
//   nonce: 7,
//   data: '0xf2e4a748000000000000000000000000cf469d3beb3fc24cee979eff83be33ed50988502',
//   r: '0x39e41245de8dc3416f6a2ad5923a427019e9a2532c3a9813b4c150e5211aa5d2',
//   s: '0x08437d934769d04bae1c67b7ea064569eb3fd7baa17078c11e7d8ea193aa3fb6',
//   v: 0,
//   creates: null,
//   chainId: 5,
//   wait: [Function (anonymous)]
// }
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
