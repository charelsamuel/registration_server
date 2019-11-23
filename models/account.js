const Sequelize = require('sequelize')

const sequelize = require('../configs/sequelize')

class Account extends Sequelize.Model {}

Account.init({
    mobileNumber: Sequelize.STRING,
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    birthDate: Sequelize.DATEONLY,
    gender: Sequelize.STRING,
    email: Sequelize.STRING
}, {sequelize, modelName: "account"})

module.exports = Account;