const express = require('express');

const router = express.Router();

// 404 Error Handler
router.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});

// 500 Error Handler
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = router;