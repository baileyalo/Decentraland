var LANDRegistry =artifacts.require("LANDRegistry");

module.exports = function (deployer) {
  deployer.deploy(LANDRegistry, "Deployed")
  //deployer.deploy(ILANDRegistry, "Deployed")
 // deployer.deploy(LANDStorage, "Deployed")
}
