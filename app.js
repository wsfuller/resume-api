const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');

const PORT = process.env.PORT || 1337;
const publicDir = path.join(__dirname, 'public');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use('/', express.static(publicDir));

// Import Routes
const personalRoutes = require('./routes/personal');
const educationRoutes = require('./routes/education');
const technologyRoutes = require('./routes/technology');
const experienceRoutes = require('./routes/experience');

app.use('/api/personal', personalRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/technology', technologyRoutes);
app.use('/api/experience', experienceRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/api', (req, res) => {
  res.sendFile(path.join(publicDir, 'api.html'));
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

app.listen(PORT, () => console.log(`Node server is running on ${PORT}`));
