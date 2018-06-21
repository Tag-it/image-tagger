const mongoose = require('mongoose');

const allTagsSchema = new mongoose.Schema({
  tags: []
});

const All_tags = mongoose.model('All_tags', allTagsSchema);

module.exports = All_tags;
