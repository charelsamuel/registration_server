"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
        return queryInterface.createTable("accounts", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            mobileNumber: {
              type: Sequelize.STRING,
              unique: true
            },
            firstName: Sequelize.STRING,
            lastName: Sequelize.STRING,
            birthDate: {
              type: Sequelize.DATEONLY,
              defaultValue: null
            },
            gender: {
              type: Sequelize.STRING,
              defaultValue: null
            },
            email: {
              type: Sequelize.STRING,
              unique: true
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        });
    },

    down: (queryInterface, Sequelize) => {
        /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
        return queryInterface.dropTable("accounts");
    }
};
