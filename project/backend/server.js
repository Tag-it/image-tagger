'use strict';

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tagger')
const Image = require('./src/models/all_tags.js')


app.get('/ping', (req,res) => {
  console.log('ping was hit')
  let item = new Image({comments: 'this is an image comment', imageURL: 'aol.com', tags:['this is an array']})

Promise.all([
  item.save()
]) .then(img => {
  console.log(img)
  res.send(img)
}) 
})

app.listen(port,() => {
  console.log(`listening on port ${port}`)
})
