var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://192.168.99.100:32797/GesPersonnel', function(err, db) {
  if (err) throw err;

  db.collection('salarie').findOne({}, function(err, doc) {
    console.dir(doc);
    db.close(doc); 
  });

  console.dir('Found a document'); 
  app.listen(8000);
});

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("Hello World!");
});


console.log("Express server started on 8000");
var express = require('express');
var cons = require('consolidate');
var app = express();

app.engine('html', cons.jade);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views')


app.get('/', function(req, res) {
  res.render("hello",  {"name": "jade"});
});

app.get('*', function(req, res) {
  res.send("Page not found", 404);
});
