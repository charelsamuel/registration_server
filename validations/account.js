const validator = require("validator");

/*
Get the errors of account attributes
@params: string firstName
         string lastName
@return: object
*/
module.exports.getErrors = (firstName, lastName) => {
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

    return errors;
};

/*
Return validation of First Name attribute
@params: string firstName
@return: object 
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
@return: object 
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
