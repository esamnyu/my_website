const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log('Error occurred while connecting to MongoDB:', error);
  } else {
    console.log('Connected to MongoDB successfully!');
    const db = client.db(dbName);
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});