const mongoose = require('mongoose');

const Image = new mongoose.Schema({
    comments: {type: String},
    imageURL: {type: String},
    tags: []
});

module.exports = mongoose.model('images', Image);
