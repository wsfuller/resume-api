const mongoose = require('mongoose');

const { Schema } = mongoose;

const PersonalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  goByName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  social: {
    type: Array,
    required: true
  },
  pets: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Personal', PersonalSchema, 'personal');
