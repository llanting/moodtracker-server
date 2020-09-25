const express = require('express');
const router = express.Router();
const MoodModel = require('../models/mood.model');

const { isLoggedIn } = require('../helpers/auth-helper');

router.get('/moods', isLoggedIn, (req, res) => {
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

router.post('/moods/create', isLoggedIn, (req, res) => {
  const {date, mood, keywords, weather, activity, userId} = req.body;
  MoodModel.create({date, mood, keywords, weather, activity, userId})
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Couldn\'t create new mood',
        message: err
      })
    });
})

module.exports = router;