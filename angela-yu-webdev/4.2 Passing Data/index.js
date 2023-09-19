import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var numOfLetters = null;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkInputLength)

function checkInputLength(req, res, next) {
  if (req.body.fName != undefined && req.body.lName != undefined) {
    numOfLetters = req.body.fName.length + req.body.lName.length
  }
  next();
}

app.get("/", (req, res) => {
  res.render('index.ejs')
});

app.post("/submit", (req, res) => {
  res.render('index.ejs', 
    { letters: numOfLetters }
  )
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
