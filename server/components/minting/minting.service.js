const { create } = require('ipfs-http-client');
const ipfs = create();

const mintingGet = () => {
}
const mintingPost = async (req, res) => {
    console.log(req.body);

    const metaData = JSON.stringify(req.body);
    const Ipfs = Buffer.from(metaData).toString('base64');

    const IPFSMeta = await ipfs.add(Ipfs);
    console.log(IPFSMeta);
    const IPFSMetaCid = IPFSMeta.cid;
    console.log(IPFSMetaCid)

    const IPFS = `ipfs://${IPFSMetaCid}`;
    console.log(IPFS)

    if (IPFS.length > 0) {
        res.status(200).json({ IPFS: IPFS });
    } else {
        res.status(400).json({ message: "민팅 실패" })
    }

}
module.exports = { mintingGet, mintingPost }