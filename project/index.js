'use strict';

const app = require('express')();
const http = require('http').Server(app);
const superagent = require('superagent');
require('dotenv').config();

const listFiles = require('./src/quickstart.js');

console.log('listFiles', listFiles);
app.get('/api', (req, res) => {
  listFiles()
  .then(files => {
    res.send(files);
  })
  .catch(() => {
    res.send([]);
  });
});

// const Bundler = require('parcel-bundler');
// let bundler = new Bundler('./index.html');
// app.use(bundler.middleware());

http.listen(3000, function () {
    console.log('listening on PORT:3000')
});
