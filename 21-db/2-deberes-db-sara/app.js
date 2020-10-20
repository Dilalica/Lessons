const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

// ------ ------ ------ ------ ------ express config

app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ------ ------ ------ ------ ------ db

const db_name = 'students',
      db_user = 'student',
      db_password = 'eDuNId5pBulwXHWR';

const db_url = `mongodb+srv://${db_user}:${db_password}@dilalica-com.qegvl.mongodb.net/${db_name}?retryWrites=true&w=majority`;

const db_options = { useUnifiedTopology: true };

let db;

MongoClient.connect(db_url, db_options, (err, client) => {
    db = client.db(db_name);
    console.log('connected to db')

    db.saraColor = db.collection('sara-color');
});


// ------ ------ ------ ------ ------ routes

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/add', (req, res) => {
    console.log(req.body);
    db.saraColor.insertOne(req.body);
    res.json(req.body);
});

app.get('/resultados', (req, res) => {
    db.saraColor.find().toArray((err, docs) => {
        console.log()
        res.render('resultados',{
            data: docs,
            color: function(str){
                return `
                    <span style='color:${str}'>
                        ${str}
                    </span>
                `;
            }
        });
    });
});




// ------ ------ ------ listen
app.listen(2000);
console.log('listening at 2000...');
