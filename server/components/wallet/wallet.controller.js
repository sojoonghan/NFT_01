const express = require('express')
const router = express.Router();
const wallet = require('./wallet.service')

router.get('/', wallet.wallet);

module.exports = router;