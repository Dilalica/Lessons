const express = require('express');
const app = express();


// config
app.set('view engine', 'pug');
app.use(express.static('public'));


// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ciudad', (req, res) => {
    res.render('ciudad', {
        ciudad: req.params.ciudad
    });
});

app.get('/:ciudad/:metodo', (req, res) => {
    res.render('metodo', {
        ciudad: req.params.ciudad,
        metodo: req.params.metodo
    });
});


// listen
app.listen(1234);
console.log('escuchando en 1234...')
