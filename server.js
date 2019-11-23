const express = require('express');

const app = express();

/* Importing the routes */
const errorRouter = require('./routes/error');
const accountRouter = require('./routes/apis/v1/account');

/* Using the routes */
app.use('/api/v1/account', accountRouter);
app.use(errorRouter);

/* Index page */
app.use('/', (req, res) => {
    res.send('Registration Web Service is Running');
});

/* Application Port */
app.listen(3000, () => {
    console.log('Server started...');
});