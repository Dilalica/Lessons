# Mongo DB

We use the [MongoDB Atlas](https://www.mongodb.com/cloud)

Read the [docs]()

Other DB types:

[MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/)

[Redis](https://redis.io/)

[CouchDB](https://couchdb.apache.org/)

[Neo4j](https://neo4j.com/)

... and of course, the file system!

***

### Setting Up

```js
const MongoClient = require('mongodb').MongoClient;

// db access credentials
const username = 'username',
      password = '1234567890',
      dbname = 'db-name';

// build url using credentials
const url = `mongodb+srv://${username}:${password}@cluster-name.qegvl.mongodb.net/${dbname}`;

// options in documentation
const options = { useUnifiedTopology: true };

// you need global access to the db variable
let db;

MongoClient.connect(url, options, (err, client) => {
    if (err) throw err;

    // db references our database
    db = client.db(dbname);

    // makes accessing collection easier
    db.collectionName = db.collection('collection-name');
});
```


### Important Methods


```js
db.collectionName.insertOne({some: data});
// inserts an object to the collecion

db.collectionName.insertMany(arr);
// inserts an array of objects to the collecion

db.collectionName.find({someKey: someValue}).toArray((err, docs) => {
    console.log(docs);
});
// pass an object as an argument in .find() to limit results
// to those that match that key value pair
```

### As a Bonus

Take a look at the [collection methods](https://docs.mongodb.com/manual/reference/method/js-collection/) in the docs

And start looking at the [aggregate pipeline](https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/) and corresponding [operators](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/)


