const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
    let data = {value: "test"};

    res.json(data);
});

module.exports = router;

