const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Account extends Sequelize.Model {}

Account.init({
    mobileNumber: {
        type: Sequelize.STRING,
        unique: {
            msg: "Mobile number is already in used!"
        },
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    birthDate: Sequelize.DATEONLY,
    gender: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: {
            msg: "Email is already in used!"
        },
    }
}, {sequelize, modelName: "account"})

module.exports = Account;