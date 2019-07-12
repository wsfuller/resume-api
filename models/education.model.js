const mongoose = require('mongoose');
const notEmpty = require('../helpers/notEmpty');

const { Schema } = mongoose;

const DegreesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  dateCompleted: {
    type: String,
    required: true,
    default: 'In Progress'
  }
});

const EducationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  degrees: {
    type: [DegreesSchema],
    validate: [notEmpty, 'Need to add at least 1 degree']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Education', EducationSchema, 'education');
