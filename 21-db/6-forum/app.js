// using express
const express = require('express'),
      app = express();

// -------------------------------------------------- routes
// ------------------------------------------- configuration

// set the /public directory to serve static files
app.use(express.static('public'));

// set pug as templating engine
app.set('view engine', 'pug');


// -------------------------------------------------- routes

// app.get(route, callback)
// route is a string
// callback takes two parameters, request and response

// '/' is root directory
app.get('/', (req, res) => {
    // the req, or request, object stores all kinds
    // of data from the incoming request
    console.log(req.headers);
    console.log(req.hostname);
    console.log(req.protocol);
    // the res, or response, object has different methods
    // to help configure the response type and content
    res.render('hola');
});


app.get('/api', (req, res) => {
    // res.json(obj) sends an object or array as json to client
    res.json({hola: 'todxs'});
});


// the colon : syntax before a name turns it into a variable
app.get('/:nombre', (req, res) => {
    // req.params contains the parameters of the request URL
    const nombre = req.params.nombre;
    // res.render(fileName, obj) takes two arguments:
    // 1. a filename string, no need to add extensions or directory path)
    // 2. an object whose keys become local variables initialized in the template
    res.render('hola', {
        // name will be available as a variable in hola.pug
        name: nombre,
        // below a function that can be invoked in hola.pug
        capitalize: function(str){
            return str.toUpperCase();
        }
    });
});


// -------------------------------------------------- listen

app.listen(3000);
console.log('listening on port 3000...')
