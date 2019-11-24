# Account Registration Web Service with Restful

This is a Restful Application to handle account registration. Made with [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/), [Sequelize ORM](https://sequelize.org/), and [Jest](https://jestjs.io/)

# Installation
To run installation, type `npm install` at the terminal

# Setting Up Environment Variable
Set the environment variable for the application by creating ***.env*** file under root directory

    DB_USER=yourUser
    DB_PASSWORD=yourPassword
    DB_NAME=yourDatabaseName
    DB_HOST=yourHost
    DB_DIALECT=yourDialect (mysql/postgres/etc)

# Migrations
To run migrations, open the terminal and type:

    npx sequelize-cli db:migrate

# Test
To run unit test, open the terminal and type:

    npm test

# Run Application
To run the application, open the terminal and type:

    npm start

# Available Service
|Method| Address | Parameter 
|--|--| -- |
| POST | /api/v1/account/register  | mobileNumber, firstName, lastName, birthDay, birthMonth, birthYear, gender, email
|GET| /api/v1/date/get-days |
|GET| /api/v1/date/get-months
|GET| /api/v1/date/get-years