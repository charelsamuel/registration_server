const account = require("../validations/account");

/* Validate if mobileNumber is empty */
let title = "given empty mobile number";
test(title, () => {
    let mobileNumber = "";

    let result = {
        name: "mobileNumber",
        isError: true,
        message: "Mobile Number is required!"
    };
    expect(account.validateMobileNumber(mobileNumber)).toEqual(result);
});

/* Validate if mobile number is not indonesian format */
test("given non indonesian format mobile number", () => {
    let mobileNumber = "+638214349262";

    let result = {
        name: "mobileNumber",
        isError: true,
        message: "Please provide indonesian number format start with +62"
    };
    expect(account.validateMobileNumber(mobileNumber)).toEqual(result);
});

/* Validate if mobile number is indonesian format */
test("given indonesian format mobile number", () => {
    let mobileNumber = "+628214349262";

    let result = {
        name: "mobileNumber",
        isError: false,
        message: ""
    };
    expect(account.validateMobileNumber(mobileNumber)).toEqual(result);
});

/* Validate if mobile number range in between 11 to 15 */
test("given 10 digits mobile number", () => {
    let mobileNumber = "+628214349";

    let result = {
        name: "mobileNumber",
        isError: true,
        message: "Mobile Number must be between 11 to 15 digits!"
    };
    expect(account.validateMobileNumber(mobileNumber)).toEqual(result);
});

/* Validate if mobile number range in between 11 to 15 */
test("given 16 digits mobile number", () => {
    let mobileNumber = "+628214349262567";

    let result = {
        name: "mobileNumber",
        isError: true,
        message: "Mobile Number must be between 11 to 15 digits!"
    };
    expect(account.validateMobileNumber(mobileNumber)).toEqual(result);
});