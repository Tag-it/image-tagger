const mongoose= require('mongoose');
var url = 'mongodb://localhost:27017/mydb';
mongoose.connect(url);
const FileData = require('./file_database');
addOneFileData();
function addOneFileData() {
  let ff = new FileData({
    file_name: "Greenlake",
    file_id: 23456543,
    file_comments: ["nice shot!", "so pretty"], 
    file_tags: ["nature", "sunset"]
  })
  ff.save()
  .then(result => {
    console.log('saved result:', result);
    mongoose.disconnect();
  })
  .catch(err => {
    console.log('error:', err);
    mongoose.disconnect();
  })
}
const savedComments = {};
const savedTags = {};