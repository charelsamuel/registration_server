const account = require("../validations/account");

/* Validate if firstName is empty */
let title = "given empty first name"
test(title, () => {
    let firstName = "";

    let result = {name: "firstName", isError: true, message:"First Name is required!"};
    expect(account.validateFirstName(firstName)).toEqual(result);
});

/* Validate if firstName is present */
test("given valid first name", () => {
    let firstName = "Charel";

    let result = {name: "firstName", isError: false, message:""};
    expect(account.validateFirstName(firstName)).toEqual(result);
});