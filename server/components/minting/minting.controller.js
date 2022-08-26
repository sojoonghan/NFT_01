const express = require('express')
const router = express.Router();
const minting = require('./minting.service')

router.get('/', minting.mintingGet);
router.post('/', minting.mintingPost);

module.exports = router;