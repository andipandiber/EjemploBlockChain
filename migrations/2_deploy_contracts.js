var Votacion = artifacts.require("./Votacion.sol");

module.exports = function(deployer) {
  deployer.deploy(Votacion, ['Correa', 'Nebot'].map(x => web3.utils.asciiToHex(x)), {gas: 6700000});
};
