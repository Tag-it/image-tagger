import React from 'react'
import ReactDOM from 'react-dom'

import App from './component/app'
import './styles/index.scss'

const app = require('express')();
const http = require('http').Server(app);
const superagent = require('superagent');

const mongodb = require('mongodb');
const db = require('.backend/src/models/db');
const mongoose = require('mongoose');
const Bundler = require('parcel-bundler');
//let bundler = new Bundler(./index.html);

mongoose.connect("mongodb://localhost/tag-it");

app.use(bundler.middleware());

let container = document.createElement('div')
document.body.appendChild(container)

http.listen(3000, function () {
  console.log('listening on port: 3000')
});

ReactDOM.render(
  <App />,
  container)