import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
var people = [];
var password = '';

// middleware 
app.use(bodyParser.urlencoded({ extended: true }))

function getPeople(req, res, next) {
    people = ['Jamie', 'Yong', 'Aizhu'];
    next();
}

function getPassword(req, res, next) {
    password = "password123";
    next();
}

// routes
app.get('/', getPeople, getPassword, (req, res) => {
    res.render('index.ejs', { people, password });
})

app.post('/submit', (req, res) => {
    console.log(req.body, req.body.username, req.body.password)
    res.status(200).send('Success!!!')
    // res.status(200).json(`${req.body}`);
})

app.listen(port, () => {
    console.log(`server is up and listening at port: ${port}`)
})

