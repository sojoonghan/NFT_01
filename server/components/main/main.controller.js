const express = require('express')
const router = express.Router();
const main = require('./main.service')

router.get('/', main.main);

router.get('/logout', (req, res) => {
    res.redirect('/');
});

router.post('/', main.register);

module.exports = router;