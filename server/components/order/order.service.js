const Web3 = require('web3');
const Contract = require('../../contract/build/contracts/SaleArtToken.json');
const CA = "0xeec17886cc1fF90D283A8a7B7681c3B38699dE05"
const ABI = Contract.abi;
const bytecode = Contract.bytecode;
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const SC = new web3.eth.Contract(ABI, CA);

const orderGet = () => {
}

const orderPost = async (req, res) => {
    console.log(req.body);
    const Account = req.body.account;
    const buyerAccount = req.body.buyeraccount;
    const Price = req.body.price;
    const ID = req.body.id;

    const oder = SC.methods.purchaseArtToken(ID).send();
    if (oder === 200) {
        res.status(200).json();
    }
}
module.exports = { orderGet, orderPost }