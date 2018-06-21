const mongoose = require('mongoose');
const all_tags = require('./all_tags');

const fileDataSchema = new mongoose.Schema({
  file_name: String,
  file_id: String,
  file_comments: [],
  file_tags: []
});

const FileData = mongoose.model('FileData', fileDataSchema);
module.exports = FileData;

