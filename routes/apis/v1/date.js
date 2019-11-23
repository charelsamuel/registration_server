const express = require("express");
const cors = require("cors");

const router = express.Router();

/* 
Get day of month (1 - 31)
*/
router.get("/get-days", cors(), (req, res) => {
    let days = [];

    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }

    res.json(days);
});

/* 
Get month of year
*/
router.get("/get-months", cors(), (req, res) => {
    let months = [];

    months.push({ id: 1, name: "January" });
    months.push({ id: 2, name: "February" });
    months.push({ id: 3, name: "March" });
    months.push({ id: 4, name: "April" });
    months.push({ id: 5, name: "May" });
    months.push({ id: 6, name: "June" });
    months.push({ id: 7, name: "July" });
    months.push({ id: 8, name: "August" });
    months.push({ id: 9, name: "September" });
    months.push({ id: 10, name: "October" });
    months.push({ id: 11, name: "November" });
    months.push({ id: 12, name: "December" });

    res.json(months);
});

/* Get 80 years before */
router.get("/get-years", cors(), (req, res) => {
    let years = [];

    let date = new Date();
    let currentYear = date.getFullYear();

    let start = currentYear - 80;
    for (let i = start; i <= currentYear; i++) {
        years.push(i);
    }

    years.reverse();
    
    res.json(years);
});

module.exports = router;
