const express = require('express');

const app = express();

/* Importing the routes */
const errorRouter = require('./routes/error');
const registrationRouter = require('./routes/registration');

/* Using the routes */
app.use(registrationRouter);
app.use(errorRouter);

/* Index page */
app.use('/', (req, res) => {
    res.send('Registration Web Service is Running');
});

/* Application Port */
app.listen(3000, () => {
    console.log('Server started...');
});