const Web3 = require('web3');
const Contract = require('../../contract/build/contracts/SaleArtToken.json');
const CA = "0xF8d64dA25B9dB96Ff5EC3aB6C7b14Dd52fD88674"
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

    const oder = await SC.methods.purchaseArtToken(ID).call();
    if (oder === 200) {
        res.status(200).json();
    }
}
module.exports = { orderGet, orderPost }