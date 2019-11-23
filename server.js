const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/* Use body parser to parse req body and json */
app.use(bodyParser.urlencoded({ extended: true }));

/* Importing the routes */
const errorRouter = require('./routes/error');
const accountRouter = require('./routes/apis/v1/account');
const dateRouter = require('./routes/apis/v1/date');

/* Using the routes */
app.use('/api/v1/account', accountRouter);
app.use('/api/v1/date', dateRouter);
app.use(errorRouter);

/* Index page */
app.use('/', (req, res) => {
    res.send('Registration Web Service is Running');
});

/* Application Port */
app.listen(3000, () => {
    console.log('Server started...');
});