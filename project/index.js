'use strict';

const app = require('express')();
const http = require('http').Server(app);
const superagent = require('superagent');
const dotenv = require('dotenv');
require('dotenv').config();

const mongodb = require('mongodb');
const db = require('./src/models/db');
const mongoose = require('mongoose');
const Bundler = require('parcel-bundler');
let bundler = new Bundler('./index.html');

mongoose.connect(process.env.MONGODB_URI);

app.use(bundler.middleware());

http.listen(3000, function() {
    console.log('listening on PORT:3000')
});
