const express = require('express');

const router = express.Router();
const Experience = require('../models/experience.model');

// POST
// router.post('/', async (req, res) => {
//   const experience = new Experience({
//     company: req.body.company,
//     location: req.body.location,
//     position: req.body.position,
//     startDate: req.body.startDate,
//     endDate: req.body.endDate,
//     description: req.body.description,
//     responsibilities: req.body.responsibilities,
//     technology: req.body.technology
//   });

//   try {
//     const savedExperience = await experience.save();
//     res.json(savedExperience);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
