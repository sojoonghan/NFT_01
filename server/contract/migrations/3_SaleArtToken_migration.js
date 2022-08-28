const SaleArtToken = artifacts.require("SaleArtToken");

module.exports = function (deployer) {
    deployer.deploy(SaleArtToken);
}