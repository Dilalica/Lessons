const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello index!');
});

// app.get() first argument a string
// if preceded by a : then word becomes a variable
// that is accessible through req.params
app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

app.listen(3000);
console.log('listening on port 3000...');