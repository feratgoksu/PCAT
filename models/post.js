const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB

// mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db', {});

//create schema

const PostSchema = new Schema({
  title: String,
  description: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post