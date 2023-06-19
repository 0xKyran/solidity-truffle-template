const MyContract = artifacts.require("MyContract");
const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

contract("MyContract", (accounts) => {

  it("should initialize with the correct name", async () => {
    const myContract = await MyContract.deployed();
    const name = await myContract.getName();
    expect(name).to.equal("ExampleContract");
  });

  it("should allow the name to be changed", async () => {
    const myContract = await MyContract.deployed();
    await myContract.changeName("NewName", { from: accounts[0] });
    const name = await myContract.getName();
    expect(name).to.equal("NewName");
  });
});
