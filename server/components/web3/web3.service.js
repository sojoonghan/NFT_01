const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');
const contract = require('../contract/CIDStorage');

// const resource = fs.readFileSync('../../contract/solidity/contracts/NftOder.sol', "utf-8");
// const compiledSC = solc.compile(resource);
// let abi = '';
// let bytecode = '';
// abi = JSON.parse(compiledSC.contracts.iterface)
// console.log(abi);
// bytecode = compiledSC.contracts.bytecode;

const sc = new Web3.eth.Contract(contract.adress, contract.abi);
// let deploy = sc.deploy({
//     data: bytecode,
//     from: send_account
// }).encodeABI();

const result = await sc.methods.create().call();