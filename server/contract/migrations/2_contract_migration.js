const SaleArtToken = artifacts.require("SaleArtToken");
const MintNFT = artifacts.require("MintNFT");

module.exports = function (deployer) {
    deployer.deploy(SaleArtToken);
    deployer.link(SaleArtToken, MintNFT);
    deployer.deploy(MintNFT);
}