const mongoose = require('mongoose');

const Student = mongoose.Schema({
  RollNo: Number,
  Name: String,
  Class: String,
  Stream: String,
});

module.exports = mongoose.model('Student', Student);
