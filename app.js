const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');

const PORT = process.env.PORT || 1337;
const publicDir = path.join(__dirname, 'public');

app.use(bodyParser.json());
app.use('/', express.static(publicDir));

// Import Routes
const personalRoutes = require('./routes/personal');

app.use('/api/personal', personalRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/api', (req, res) => {
  res.send('list all api routes');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

app.listen(PORT, () => console.log(`Node server is running on ${PORT}`));
