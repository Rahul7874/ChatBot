const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

module.exports = mongoose.model('Chat', chatSchema);
