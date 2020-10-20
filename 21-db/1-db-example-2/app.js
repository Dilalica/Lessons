const express = require('express'),
      app = express(),
      MongoClient = require('mongodb').MongoClient;



// ---------------------------------------------------- express config
app.use(express.static('public'));
app.set('view engine', 'pug');



// --------------------------------------------------------- db config

// db access credentials
const username = 'posenet',
      password = 'VRHB8r5O21Sy9yc2',
      dbName = 'students';

// build url using credentials
const url = `mongodb+srv://${username}:${password}@dilalica-com.qegvl.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// options in documentation
const options = { useUnifiedTopology: true };

// global db variable
let db;

MongoClient.connect(url, options, (err, client) => {
    if (err) throw err;
    // db now references our database
    db = client.db(dbName);

    // makes accessing collection easier
    db.louis = db.collection('louis-example-2');

    console.log('connected to db')
});



// ------------------------------------------------------------ routes

app.get('/', (req, res) => {
    res.render('index');
});

// ------------- THE ONLY ROUTE TO CHANGE FROM EXAMPLE 1 -------------
app.get('/add', (req, res) => {
    db.louis.insertOne(req.query);
    // route redirects to results
    res.redirect('/messages');
});

app.get('/messages', (req, res) => {
    db.louis.find({}).toArray((err, docs) => {
        res.render('messages', { messages: docs });
    });
});



// ------------------------------------------------------------ listen

app.listen(1234);
console.log('listening on 1234...');
