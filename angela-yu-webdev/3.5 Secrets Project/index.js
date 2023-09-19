import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url))
var isUserAuthenticated = false;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.use(validatePassword)

function validatePassword(req, res, next) {
    if (req.body.password === 'ILoveProgramming') {
        isUserAuthenticated = true;
    } 
    next();
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/check', (req, res) => {
    isUserAuthenticated ? res.sendFile(__dirname + '/public/secret.html') : res.sendFile(__dirname + '/public/index.html')
})



app.listen(port, () => {
    console.log(`Express server started at port: ${port}`)
})