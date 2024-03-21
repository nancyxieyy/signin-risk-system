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
        engagementScore: 0,
        risk: ""
    };

    let items = [req.query.item_1, req.query.item_2, req.query.item_3, req.query.item_4];
    let attendances = [req.query.attendance_1, req.query.attendance_2, req.query.attendance_3, req.query.attendance_4];

    let attendance_5 = req.query.attendance_5;
    let score = req.query.engagementScore ;

    let risk = getRisk(score, attendance_5);

    output.items = items;
    output.attendance = attendances;
    output.engagementScore = score;
    output.risk = risk;

    res.json(output);
});

function getRisk(score, cutoff) {
    let cutoffNum = parseInt(cutoff) || 0;
    score *= 100;

    if (score >=  cutoffNum) {
        return false;
    } else {
        return true;
    }

}

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});