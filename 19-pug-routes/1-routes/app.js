const express = require('express');
const app = express();


// --------------------------------- config

app.use(express.static('public'));
app.set('view engine', 'pug');


// --------------------------------- routes

let userData = [];

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dynamic/:word', (req, res) => {
    const sendToTemplate = {
        palabra: req.params.word
    };
    // call api weather
    // res.render(str, obj)
    // the obj keys become local variables
    // available in template
    res.render('variables', sendToTemplate);
});


// --------------------------------- listen

app.listen('1234');
console.log('listening on 1234...');
