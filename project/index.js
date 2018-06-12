'use strict';

const app = require('express')();
const http = require('http').Server(app);
const superagent = require('superagent');
const dotenv = require('dotenv');
require('dotenv').config();
const app = express();


const Bundler = require('parcel-bundler');
let bundler = new Bundler('.public/index.html');
app.use(bundler.middleware());

http.listen(3000, function () {
    console.log('listening on PORT:3000')
});
