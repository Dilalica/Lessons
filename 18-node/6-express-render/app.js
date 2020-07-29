const express = require('express');
const app = express();

// establish ejs as templating engine
// alternatives include handlebars, and pug
app.set('view engine', 'ejs');

// set folder name from which to serve static files
// e.g. client side .css .js or images
app.use(express.static('public'));

// __dirname [string]
// current directory of executed app.js file
console.log(__dirname);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.render('dynamic', {mensaje: name});
});

app.listen(3000);
console.log('listening on port 3000...');