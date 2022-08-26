const { create } = require('ipfs-http-client');
const ipfs = create();

const ipfsGet = () => {
}
const ipfsPost = async (req, res) => {
    console.log(req.file)
    const image = req.file;
    const imgPath = image.filename;
    const imgFile = await ipfs.add(image);
    const imgUrl = 'http://localhost:3001/';
    const result = `${imgUrl}${imgPath}`;

    console.log(imgFile);
    console.log(imgPath);
    console.log("이미지 파일")
    console.log(result);

    const cid = `${imgFile.cid}`;
    console.log(cid)

    if (cid.length > 0) {
        res.status(200).send({ cid: cid, result: result });
    } else {
        res.status(400).json({ message: "실행 오류" })
    }


}
module.exports = { ipfsGet, ipfsPost }