const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.send('This is index page');
});

app.listen(3000, () => {
    console.log('Server started...');
});