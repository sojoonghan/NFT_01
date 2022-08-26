const express = require('express')
const router = express.Router();
const market = require('./market.service')

router.get('/', market.market);

module.exports = router;