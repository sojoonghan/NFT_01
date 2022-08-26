const express = require('express')
const path = require('path')
const router = express.Router();
const ipfs = require('./ipfs.service')
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) => {
            done(null, 'uploads/');
        },
        filename: (req, file, done) => {

            done(null, getFile(file));
        },
        limits: { fileSize: 1024 * 1024 * 1024 }
    })
});
const getFile = (file) => {
    let oriFile = file.originalname;
    let ext = path.extname(oriFile);
    let name = path.basename(oriFile, ext)
    return Date.now() + '_' + name + ext;
}


router.get('/', ipfs.ipfsGet);
router.post('/', upload.single('img'), ipfs.ipfsPost);

module.exports = router;