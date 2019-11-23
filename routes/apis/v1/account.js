const express = require('express');
const cors = require('cors');

const router = express.Router();

const accountValidation = require('../../../validations/account');

router.get('/test', cors(), (req, res) => {
    let data = {value: "test"};

    res.json(data);
});

router.post('/register', cors(), (req, res) => {
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

});

module.exports = router;