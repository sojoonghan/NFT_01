const express = require('express')
const router = express.Router();
const order = require('./order.service')

router.get('/', order.orderGet);
router.post('/', order.orderPost);

module.exports = router;