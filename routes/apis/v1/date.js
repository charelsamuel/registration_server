const express = require("express");
const cors = require("cors");

const router = express.Router();

const dateController = require('../../../controllers/date');

/* 
Get day of month (1 - 31)
*/
router.get("/get-days", cors(), dateController.getDays);

/* 
Get month of year
*/
router.get("/get-months", cors(), dateController.getMonths);

/* Get 80 years before */
router.get("/get-years", cors(), dateController.getYears);

module.exports = router;
