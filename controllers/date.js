/* Return days of month */
module.exports.getDays = (req, res) => {
    let days = [];

    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }

    res.json(days);
}

/* Return months of year */
module.exports.getMonths = (req, res) => {
    let months = [];

    months.push({ id: "01", name: "January" });
    months.push({ id: "02", name: "February" });
    months.push({ id: "03", name: "March" });
    months.push({ id: "04", name: "April" });
    months.push({ id: "05", name: "May" });
    months.push({ id: "06", name: "June" });
    months.push({ id: "07", name: "July" });
    months.push({ id: "08", name: "August" });
    months.push({ id: "09", name: "September" });
    months.push({ id: "10", name: "October" });
    months.push({ id: "11", name: "November" });
    months.push({ id: "12", name: "December" });

    res.json(months);
}

/* Return 80 years before */
module.exports.getYears = (req, res) => {
    let years = [];

    let date = new Date();
    let currentYear = date.getFullYear();

    let start = currentYear - 80;
    for (let i = start; i <= currentYear; i++) {
        years.push(i);
    }

    years.reverse();
    
    res.json(years);
}