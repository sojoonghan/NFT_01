const express = require('express')
const router = express.Router();
const artist = require('./artist.service')

router.get('/', artist.artist);

module.exports = router;