const express = require('express');
//imports Mongodb npm
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

//stores the connection string to local instance of Mongodb
const connectionStringURI = `mongodb://127.0.0.1:27017`;

//initialize a new instance of MongoClient
const client = new MongoClient(connectionStringURI);

//declare a variable to hold the connection
let db;

//create variable to hold our database name
const dbName = 'inventoryDB';

//connects to MongoDB
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    //use client.db() constructor to add new db instance
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

  //express function that parses incoming requests to JSON
app.use(express.json());


//adds one document to the database
app.post('/create', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

//adds multiple to the database
app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

//finds all documents in the collection
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
