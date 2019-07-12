const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const PORT = process.env.PORT || 1337;

app.use(bodyParser.json());

// Import Routes
const personalRoutes = require('./routes/personal');

app.use('/personal', personalRoutes);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

app.listen(PORT, () => console.log(`Node server is running on ${PORT}`));
