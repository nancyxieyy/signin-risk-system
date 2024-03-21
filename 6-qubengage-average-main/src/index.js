const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json");
    next();
});

app.get('/', (req, res) => {
    let output = {
        error: false,
        items: "",
        attendance: 0,
        average: 0
    };

    let items = [req.query.item_1, req.query.item_2, req.query.item_3, req.query.item_4];
    let attendances = [req.query.attendance_1, req.query.attendance_2, req.query.attendance_3, req.query.attendance_4];

    let averageHours = getAverage(attendances);

    output.items = items;
    output.attendance = attendances;
    output.average = averageHours;

    res.json(output);
});

function getAverage(attendances) {
    let attendancesNum = attendances.map(a => parseInt(a) || 0);
    let sum = 0;

    for (let i = 0; i < attendancesNum.length; i++) {
        sum += attendancesNum[i];
    }
    let average = sum / attendancesNum.length;

    return average;
}

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
