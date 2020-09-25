const express = require('express');
const router = express.Router();
const MoodModel = require('../models/mood.model');

router.get('/moods', (req, res) => {
  MoodModel.find()
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json({
        error: 'Couldn\'t get all moods',
        message: err
      })
    });
})

router.post('/moods/create', (req, res) => {
  const {date, mood, keywords, weather, activity} = req.body;
  MoodModel.create({date, mood, keywords, weather, activity})
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json({
        error: 'Couldn\'t create new mood',
        message: err
      })
    });
})

module.exports = router;