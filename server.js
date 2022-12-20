const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<user>:<pass>@cluster0.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, client) {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// Home page route
app.get('/', function (req, res) {
  res.send('Welcome to my website');
});

// About page route
app.get('/about', function (req, res) {
  res.send('About me');
});

// Contact page route
app.get('/contact', function (req, res) {
  res.send('Contact me');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/contact', function (req, res) {
    // Handle contact form submission
  });

