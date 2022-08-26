const express = require('express')
const router = express.Router();
const home = require('./home.service')

router.get('/', home.home);

module.exports = router;