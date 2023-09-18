import express from 'express';

const app = express();
const port = 3000;
var isWeekend = null;

function checkWeekend(day) {
    if (day >= 0 && day <= 6) {
        return (day === 6 || day === 0) ? true : false;
    } else return 'out of scope';
}

function getToday(req, res, next) {
    const day = new Date().getDay();
    isWeekend = checkWeekend(day);
    console.log(isWeekend)
    next();
}

app.use(getToday)

app.get('/', (req, res) => {
    res.render(
        'index.ejs', 
        { isWeekend: isWeekend }
    );
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})