const Account = require("../models/account");

const accountValidation = require("../validations/account");

/* POST Account function */
module.exports.postAccount = (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let mobileNumber = req.body.mobileNumber;
    let email = req.body.email;
    let gender = req.body.gender;
    let day = req.body.birthDay;
    let month = req.body.birthMonth;
    let year = req.body.birthYear;
    let birthDate = year + "-" + month + "-" + day;

    let errors = accountValidation.getErrors(
        firstName,
        lastName,
        mobileNumber,
        email
    );

    if (errors.hasError) {
        res.status(400);
        res.json(errors);
    } else {
        let attributes = {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            email: email,
            birthDate: birthDate,
            gender: gender
        };
        Account.create(attributes)
            .then(account => {
                let data = { success: true };
                res.json(data);
            })
            .catch(error => {
                res.status(400);
                error.errors.forEach(item => {
                    errors.attributes.push({name: item.path, message: item.message});
                });

                res.json(errors);
            });
    }
};
