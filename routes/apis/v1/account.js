const express = require('express');
const cors = require('cors');

const router = express.Router();

const accountController = require('../../../controllers/account');

router.post('/register', cors(), accountController.postAccount);

module.exports = router;