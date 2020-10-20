console.log('Server-side code running');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;


//serve static files from the oublic directory
app.use(express.static('public'));

// allows us to get JSON from req.body
app.use(express.json());

// start the express web server listening on 1212
app.listen(1212, () => {
    console.log('listening on 1212');
});

// db access credentials
const db_name = 'students',
      db_user = 'posenet',
      db_password = 'VRHB8r5O21Sy9yc2';

// build url using credentials
const db_url = `mongodb+srv://${db_user}:${db_password}@dilalica-com.qegvl.mongodb.net/${db_name}?retryWrites=true&w=majority`;

// options in documentation
const db_options = { useUnifiedTopology: true };

// global db variable
let db;

MongoClient.connect(db_url, db_options, (err, client) => {
    db = client.db(db_name);
    db.cati = db.collection('dots-cati');

    console.log('connected to db')
    // console.log(db.cati);
});


app.post('/clicked', (req, res) => {
    console.log(req.body);
    db.cati.insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log('click added to db');
        res.json(req.body);
    });
});


app.get('/clicks', (req, res) => {
    db.cati.find({}).toArray((err, docs) => {
        if(err) throw err;
        res.json(docs);
    });
});
