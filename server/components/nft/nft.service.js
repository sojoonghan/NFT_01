const Web3 = require('web3');
// const solc = require('solc');
// const fs = require('fs');
const contract = require('../../contract/build/contracts/MintNFT.json');
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const CA = "0x1E814a0b323f137C4D9bB87466F178e118400c2A"
const ABI = contract.abi;
const sc = new web3.eth.Contract(ABI, CA);
const bytecode = contract.bytecode;

const nftGet = () => {
}

const nftPost = async (req, res) => {
    console.log(req.body);

    const tokenURI = req.body.tokenuri;
    const Account = req.body.account;
    const Price = req.body.price;
    console.log(tokenURI);
    console.log(Account);
    console.log(Price);

    const newItemId = await sc.methods.mintNFT(Account, tokenURI).encodeABI();

    console.log(newItemId);


    if (newItemId) {
        res.status(200).json({ id: newItemId });
    } else {
        res.status(400).json({ message: "실행 오류" })
    }
}
module.exports = { nftGet, nftPost }