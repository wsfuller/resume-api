const express = require('express');

const router = express.Router();
const Technology = require('../models/technology.model');

// POST
// router.post('/', async (req, res) => {
//   const technology = new Technology({
//     skillSet: req.body.skillSet,
//     description: req.body.description,
//     tools: req.body.tools
//   });

//   try {
//     const savedTechnology = await technology.save();
//     res.json(savedTechnology);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const technology = await Technology.find();
    res.json(technology);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
