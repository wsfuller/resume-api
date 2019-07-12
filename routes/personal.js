const express = require('express');

const router = express.Router();
const Personal = require('../models/personal.model');

// POST
/* router.post('/', async (req, res) => {
  const personal = new Personal({
    name: req.body.name,
    goByName: req.body.goByName,
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    social: req.body.social,
    pets: req.body.pets
  });

  try {
    const savedPersonal = await personal.save();
    res.json(savedPersonal);
  } catch (err) {
    res.json({ message: err });
  }
}); */

router.get('/', async (req, res) => {
  try {
    const personal = await Personal.find();
    res.json(personal);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
