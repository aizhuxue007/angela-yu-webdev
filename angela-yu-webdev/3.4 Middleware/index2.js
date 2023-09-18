import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from "url";
import express from "express";
import morgan from 'morgan';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const accessedLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  { flags: 'a' }
)

// app.use(morgan('combined', { stream: accessedLogStream }))

app.use(morgan('combined'));

app.get("/", (req, res) => {
  console.log
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
