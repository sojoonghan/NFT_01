const Web3 = require('web3')
const contract = require('../contract/CIDStorage');

const getWeb3 = () => {
    let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    return web3;
}

const getAccouts = async () => {
    try {
        const accounts = await getWeb3().eth.getAccouts();
        return accounts

    } catch (err) {
        console.log(err);
    }
}
const sc = new web3.eth.Contract(contract.abi, contract.address);