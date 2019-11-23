/* POST Account function */
module.exports.postAccount = (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let mobileNumber = req.body.mobileNumber;
    let email = req.body.email;

    let errors = accountValidation.getErrors(firstName, lastName, mobileNumber, email);

    if (errors.hasError) {
        res.status(400);
        res.json(errors);
    } else {
        res.json(firstName);
    }
}