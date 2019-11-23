const validator = require("validator");

const Account = require('../models/account');

/*
Get the errors of account attributes
@params: string firstName,
         string lastName,
         string mobileNumber
@return object
*/
module.exports.getErrors = (firstName, lastName, mobileNumber, email) => {
    let errors = { hasError: false, attributes: [] };

    /* Validate first name */
    let validateFirstName = this.validateFirstName(firstName);
    if (validateFirstName.isError) {
        errors.hasError = true;
        errors.attributes.push({
            name: validateFirstName.name,
            message: validateFirstName.message
        });
    }

    /* Validate last name */
    let validateLastName = this.validateLastName(lastName);
    if (validateLastName.isError) {
        errors.hasError = true;
        errors.attributes.push({
            name: validateLastName.name,
            message: validateLastName.message
        });
    }

    /* Validate mobile number */
    let validateMobileNumber = this.validateMobileNumber(mobileNumber);
    if (validateMobileNumber.isError) {
        errors.hasError = true;
        errors.attributes.push({
            name: validateMobileNumber.name,
            message: validateMobileNumber.message
        });
    }

    /* Validate email */
    let validateEmail = this.validateEmail(email);
    if (validateEmail.isError) {
        errors.hasError = true;
        errors.attributes.push({
            name: validateEmail.name,
            message: validateEmail.message
        });
    }

    return errors;
};

/*
Return validation of First Name attribute
@params: string firstName
@return object 
*/
module.exports.validateFirstName = firstName => {
    let result = {
        name: "firstName",
        isError: false,
        message: ""
    };

    /* First Name required validation */
    if (validator.isEmpty(firstName)) {
        result.isError = true;
        result.message = "First Name is required!";
    }

    return result;
};

/*
Return validation of Last Name attribute
@params: string lastName
@return object 
*/
module.exports.validateLastName = lastName => {
    let result = {
        name: "lastName",
        isError: false,
        message: ""
    };

    /* Last Name required validation */
    if (validator.isEmpty(lastName)) {
        result.isError = true;
        result.message = "Last Name is required!";
    }

    return result;
};

/*
Return validation of mobile number attribute
@params: string mobileNumber
@return object 
*/
module.exports.validateMobileNumber = mobileNumber => {
    let result = {
        name: "mobileNumber",
        isError: false,
        message: ""
    };

    /* Mobile Number must be indonesia formatted */
    if (mobileNumber.substring(0, 3) != "+62") {
        result.isError = true;
        result.message =
        "Please provide indonesian number format start with +62";
    }

    /* Mobile Number required validation */
    if (validator.isEmpty(mobileNumber)) {
        result.isError = true;
        result.message = "Mobile Number is required!";
    }
    return result;
};

/*
Return validation of email attribute
@params: string email
@return object 
*/
module.exports.validateEmail = email => {
    let result = {
        name: "email",
        isError: false,
        message: ""
    };

    /* Email required validation */
    if (validator.isEmpty(email)) {
        result.isError = true;
        result.message = "Email is required!";
    }
    
    return result;
};