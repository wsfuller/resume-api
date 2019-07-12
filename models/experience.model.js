const mongoose = require('mongoose');
const notEmpty = require('../helpers/notEmpty');

const { Schema } = mongoose;

const ExperienceSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: {
    type: [String],
    validate: [notEmpty, 'Need at least 1 responsibility']
  },
  technology: {
    type: [String],
    validate: [notEmpty, 'Need at least 1 technology']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Experience', ExperienceSchema, 'experience');
