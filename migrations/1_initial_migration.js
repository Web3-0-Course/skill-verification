const Decentraskill = artifacts.require('Decentraskill')

// deploys the smart contract 'Decentraskill'
module.exports = function (deployer){
    deployer.deploy(Decentraskill);
};