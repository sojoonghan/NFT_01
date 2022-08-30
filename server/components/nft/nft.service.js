const Web3 = require('web3');
const contract = require('../../contract/build/contracts/MintNFT.json');
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const CA = "0x303D943236E4526113E7d4556AD9E9b37013dAF7";
const ABI = contract.abi;
const sc = new web3.eth.Contract(ABI, CA);
// const bytecode = contract.bytecode;

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

    const newItemId = await sc.methods.mintNFT(Account, tokenURI).call();;
    console.log(newItemId);

    if (newItemId) {
        res.status(200).json({ tokenid: newItemId });
    } else {
        res.status(400).json({ message: "실행 오류" })
    }
}
module.exports = { nftGet, nftPost }