const express = require('express');
const cors = require('cors');

const router = express.Router();

router.get('/test', cors(), (req, res) => {
    let data = {value: "test"};

    res.json(data);
});

router.post('/register', cors(), (req, res) => {
    let data = req.body;
    
    res.json(data);
});

module.exports = router;