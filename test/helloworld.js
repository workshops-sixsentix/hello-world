const { it } = require("ethers/wordlists");

const HelloWorld = artifacts.require("HelloWorld");

contract("Hello World test", async (accounts) => {
  it("Should set a greeting", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setGreeting("Hello world");
  });
});
