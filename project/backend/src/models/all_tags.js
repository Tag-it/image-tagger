const mongoose = require('mongoose');

const allTagsSchema = new mongoose.Schema({
    comments: String,
    imageURL: String,
    tags: []
});

const All_tags = mongoose.model('All_tags', allTagsSchema);

module.exports = All_tags;
