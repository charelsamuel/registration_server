const account = require("../validations/account");

/* Validate if email is empty */
let title = "given empty first name"
test(title, () => {
    let email = "";

    let result = {name: "email", isError: true, message:"Email is required!"};
    expect(account.validateEmail(email)).toEqual(result);
});

/* Validate if email is present */
test("given valid first name", () => {
    let email = "charelsamuel@gmail.com";

    let result = {name: "email", isError: false, message:""};
    expect(account.validateEmail(email)).toEqual(result);
});