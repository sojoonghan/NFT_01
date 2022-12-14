import { atom } from 'recoil'

const linkChange = atom({
    key: "linkChange",
    default: true,
});

const minting = atom({
    key: "minting",
    default: '',
});
const nft = atom({
    key: "nft",
    default: "",
})
const img = atom({
    key: "img",
    default: "",
})
const Account = atom({
    key: "Account",
    default: "",
})
const buyerAccount = atom({
    key: "buyerAccount",
    default: "",
})
const chainid = atom({
    key: "chacinid",
    default: "",
})
const name = atom({
    key: "name",
    default: "",
})
const title = atom({
    key: "title",
    default: "",
})
const descript = atom({
    key: "descript",
    default: {},
})

const price = atom({
    key: "price",
    default: "",
})

const newID = atom({
    key: "newID",
    default: "",
})
export { linkChange, minting, nft, img, Account, buyerAccount, chainid, name, title, descript, price, newID }