import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(req.rawHeaders)
    res.send('<h1>HELLO WORLD!</h1>');
})

app.get('/contact', (req, res) => {
    res.send('<h2>333-058-2941</h2>');
})

app.get('/about', (req, res) => {
    res.send('<p>I love Jesus because He first loved me</p>');
})

app.listen(PORT, () => {
    console.log(`Server is servicing on port ${PORT}`)
});