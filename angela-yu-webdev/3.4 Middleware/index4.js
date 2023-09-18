import express from "express";
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = '';

function logger(req, res, next) {
  console.log(`
    Request Method: ${req.method}
    Request URL: ${req.url} 
  `)
  next();
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function bandNameGenerator(req, res, next) {
  bandName = `${capitalize(req.body["street"])} ${capitalize(req.body["pet"])}`;
  next();
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger)
app.use(bandNameGenerator)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html', (error) => {
    if (error) console.log(error);
  })
})

app.post('/submit', (req, res) => {
  res.send(`
    <h1>YOUR NEW BAND NAME IS:</h1>
    <h2>${bandName}</h2>
  `)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
