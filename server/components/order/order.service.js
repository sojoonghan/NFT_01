const Web3 = require('web3');
const contract = require('../../contract/OderStorage');
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const SC = new web3.eth.Contract(contract.abi);

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