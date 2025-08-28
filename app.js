const ejs = require('ejs');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index'); // Assuming you have an index.ejs file
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});