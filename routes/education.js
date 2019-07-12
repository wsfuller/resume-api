const express = require('express');

const router = express.Router();
const Education = require('../models/education.model');

// POST
// router.post('/', async (req, res) => {
//   const education = new Education({
//     name: req.body.name,
//     location: req.body.location,
//     degrees: req.body.degrees
//   });

//   try {
//     const savedEducation = await education.save();
//     res.json(savedEducation);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.get('/', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
