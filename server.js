const express = require('express');

const app = express();

/* Importing the routes */
const errorRouter = require('./routes/error');

/* Using the routes */
app.use(errorRouter);

/* Index page */
app.use('/', (req, res) => {
    res.send('Registration Web Service is Running');
});

app.listen(3000, () => {
    console.log('Server started...');
});