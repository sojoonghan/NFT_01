const path = require('path')
const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
// app.use('/ipfs', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());

app.use('/', require('./components/main/main.controller'));
app.use('/home', require('./components/home/home.controller'));
app.use('/login', require('./components/login/login.controller'));
app.use('/market', require('./components/market/market.controller'));
app.use('/artist', require('./components/artist/artist.controller'));
app.use('/wallet', require('./components/wallet/wallet.controller'));
app.use('/logout', require('./components/logout/logout.controller'));
app.use('/ipfs', require('./components/ipfs/ipfs.controller'));
app.use('/minting', require('./components/minting/minting.controller'));
app.use('/nft', require('./components/nft/nft.controller'));
app.use('/order', require('./components/order/order.controller'));

module.exports = app;
