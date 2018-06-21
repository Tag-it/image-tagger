'use strict';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
const app = require ('express')();
require('dotenv').config();

const getAuth = require('./quickstart.js');
let masterData;

const images = [
  'https://i.imgur.com/UO1HHtS.jpg',
'https://i.imgur.com/NCCoszN.jpg',
'https://i.imgur.com/hbcjYHp.jpg',
'https://i.imgur.com/s8egXvx.jpg',
'https://i.imgur.com/kVw3uqt.jpg',
'https://i.imgur.com/x8AZtNG.jpg',
'https://i.imgur.com/nxTxKnS.jpg'
]
// files variable will be a promise, but also has the data in it. This means you can use .then and .catch if you like after files. 

// Otherwise, masterData will hold your files.
let files = new Promise( (resolve, reject) =>{
  return getAuth(resolve)
})
  .then(data => {
    //console.log('data from index.js files', data)
    masterData = data;
    return data;
})


// When you hit localhost:3000/api it will send you back the masterData



app.get('/api/file-tag', (req, res) => {
  res.send(masterData);
  //res.send(<img src="https://drive.google.com/uc?export=view&id=1SK5pEBsxogrwL9mwuBHPXk7RT017YQvT" alt="">)
  res.end;
})

// const Bundler = require('parcel-bundler');
// let bundler = new Bundler('./index.html');
// app.use(bundler.middleware());

// const mongodb = require('mongodb');
// const db = require('./src/models/db');
// const mongoose = require('mongoose');

// //mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect("mongodb://localhost/tag-it");

app.listen(3000, function() {
    console.log('listening on PORT:3000')
});
