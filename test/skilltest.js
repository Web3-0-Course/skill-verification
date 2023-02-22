const decentraSkill = artifacts.require("Decentraskill");

contract("Decentraskill", async accounts => {
    it ("should initialize the contract with a user named dummy", async () => {
        let instance = await decentraSkill.deployed();
        let user = await instance.employees(0);
        
        assert.equal(user.name, "dummy", "The name is not correct");
        assert.equal(user.id, 0, "ID should be 0");

    });

    it("Should Sign up a new user", async () => {
       const email = "index@hotmail.com";
       const name = "Avense";
       const companyType = "Company";
       let instance = await decentraSkill.deployed();

       const tx = await instance.sign_up(email, name, companyType);
       const Company = await instance.companies(0);
       console.log(Company);

       assert.equal(Company.name, name, "Company name should be Avense");
       assert.equal(Company.email, email, `Company email should be equal to ${email}`)
       assert.equal(Company.id, 0, "ID must be 0");
       assert.equal(Company.wallet_address, '0xCDfA1089795dE2299dCCF9788E32df0CC28dD8AF', "Wallet address must be first account in truffle ");

    });

    it("Should Add experience  ", async () => {
        
        let instance = await decentraSkill.deployed();
        let user = await instance.add_experience(0, "08/12/2022","02/20/2023",1,"Web Developer");

        let callUser = await instance.employees(0);
        console.log(callUser);

        assert.equal(callUser.name, "dummy", "name should be equal to dummy");
        assert.equal(callUser.id, 0,"ID should be 0");
    });

});