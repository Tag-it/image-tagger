var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Database created!');
  db.close();
});

const file_name = require('./models/file_database');
const file_id = require('./models/file_database');
const file_comment = require('./models/file_database');

const file_tags = require('./models/file_database');
const all_tags = require('.models/all_tags');