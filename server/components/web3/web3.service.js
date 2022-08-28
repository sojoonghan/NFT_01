const Web3 = require('web3');
// const solc = require('solc');
// const fs = require('fs');
const contract = require('../contract/CIDStorage');
const web3 = new Wb3(Web3.givenProvider || "ws://localhost:7545");
const sc = new web3.eth.Contract(contract.adress, contract.abi);
