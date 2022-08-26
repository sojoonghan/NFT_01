const express = require('express')
const router = express.Router();
const logout = require('./logout.service')


router.get('/', logout.logout);

module.exports = router;