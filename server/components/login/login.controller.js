const express = require('express')
const router = express.Router();
const login = require('./login.service')

router.get('/', login.loginGet);
router.post('/', login.loginPost);

module.exports = router;