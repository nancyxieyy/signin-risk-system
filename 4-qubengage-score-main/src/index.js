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
        engagementScore: 0
    };

    let items = [req.query.item_1, req.query.item_2, req.query.item_3, req.query.item_4];
    let attendances = [req.query.attendance_1, req.query.attendance_2, req.query.attendance_3, req.query.attendance_4];

    let studentEngagementScore = getEngagementScore(attendances);

    output.items = items;
    output.attendance = attendances;
    output.engagementScore = studentEngagementScore;

    res.json(output);
});

function getEngagementScore(attendances) {
    let attendancesNum = attendances.map(a => parseInt(a) || 0);

    let lec = attendancesNum[0];
    let lecW = 0.3;
    let lecTotal = 33;
    let lab = attendancesNum[1];
    let labW = 0.4;
    let labTotal = 22;
    let supp = attendancesNum[2];
    let suppW = 0.15;
    let suppTotal = 44;
    let can = attendancesNum[3];
    let canW = 0.15;
    let canTotal = 55;

    let studentEngagementScore = lec * lecW / lecTotal + lab * labW / labTotal + supp * suppW / suppTotal + can * canW / canTotal;

    return studentEngagementScore;
}

const startServer = (port) => {
    return app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

const PORT = process.env.PORT || 3001;
if (require.main === module) {
    startServer(PORT);
}

module.exports = { app, getEngagementScore, startServer }
