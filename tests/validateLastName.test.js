const account = require("../validations/account");

/* Validate if lastName is empty */
let title = "given empty last name";
test(title, () => {
    let lastName = "";

    let result = {name: "lastName", isError: true, message:"Last Name is required!"};
    expect(account.validateLastName(lastName)).toEqual(result);
});

/* Validate if lastName is present */
test("given valid last name", () => {
    let lastName = "Samuel";

    let result = {name: "lastName", isError: false, message:""};
    expect(account.validateLastName(lastName)).toEqual(result);
});