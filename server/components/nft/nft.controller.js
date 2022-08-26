
const express = require('express')
const router = express.Router();
const nft = require('./nft.service')

router.get('/', nft.nftGet);
router.post('/', nft.nftPost);

module.exports = router;