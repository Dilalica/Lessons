const express = require('express');
const app = express();


// --------------------------------- config

app.use(express.static('public'));
app.set('view engine', 'pug');

// for parsing json in post requests
app.use(express.json())
// for parsing multidimensional objects
app.use(express.urlencoded({ extended: true }))

// store user data in an array
let userData = [];


// --------------------------------- routes

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/action', (req, res) => {
    res.render('action');
});


app.get('/results', (req, res) => {
    res.render('results', {
        data: userData
    });
});


app.post('/add-something', (req, res) => {
    console.log('req.body', req.body);
    userData.push(req.body);
    console.log('userData', userData);
    res.json(userData);
});


// --------------------------------- listen

app.listen('1234');
console.log('listening on 1234...');
