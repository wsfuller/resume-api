const mongoose = require('mongoose');
const notEmpty = require('../helpers/notEmpty');

const { Schema } = mongoose;

const TechnologySchema = new Schema({
  skillSet: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tools: {
    type: [String],
    validate: [notEmpty, 'Need to add at least 1 tool']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Technology', TechnologySchema, 'technology');
