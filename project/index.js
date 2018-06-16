'use strict';

const app = require('express')();
const http = require('http').Server(app);
const superagent = require('superagent');
require('dotenv').config();

const getAuth = require('./src/quickstart.js');
let masterData;

// files variable will be a promise, but also has the data in it. This means you can use .then and .catch if you like after files. 

// Otherwise, masterData will hold your files.
let files = new Promise( (resolve, reject) =>{
  return getAuth(resolve)
})
  .then(data => {
    console.log('data from index.js files', data)
    masterData = data;
    return data;
})

// When you hit localhost:3000/api it will send you back the masterData

app.get('/api', (req, res) => {
  res.send(masterData)
});

// const Bundler = require('parcel-bundler');
// let bundler = new Bundler('./index.html');
// app.use(bundler.middleware());

// const mongodb = require('mongodb');
// const db = require('./src/models/db');
// const mongoose = require('mongoose');

// //mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect("mongodb://localhost/tag-it");

http.listen(3000, function() {
    console.log('listening on PORT:3000')
});
