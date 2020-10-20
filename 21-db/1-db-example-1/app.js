const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;



// ---------------------------------------------------- express config
app.set('view engine', 'pug');
app.use(express.static('public'));



// --------------------------------------------------------- db config

// db access credentials
const db_name = 'students',
      db_user = 'posenet',
      db_password = 'VRHB8r5O21Sy9yc2';

// build url using credentials
const url = `mongodb+srv://${db_user}:${db_password}@dilalica-com.qegvl.mongodb.net/${db_name}?retryWrites=true&w=majority`;

// options in documentation
const options = { useUnifiedTopology: true };

// global db variable
let db;

MongoClient.connect(url, options, (err, client) => {
    if (err) throw err;

    // db now references our database
    db = client.db(db_name);

    // makes accessing collection easier
    db.louis = db.collection('louis-example-1');

    console.log('connected to db');
});



// ------------------------------------------------------------ routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/add', (req, res) => {
    db.louis.insertOne(req.query);
    console.log(req.query);
    res.json(req.query);
});

app.get('/messages', (req, res) => {
    db.louis.find({}).toArray((err, docs) => {
        res.render('messages', { messages: docs });
    });
});



// ------------------------------------------------------------ listen
app.listen(1234);
console.log('listening on 1234...')
