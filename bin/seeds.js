require('../configs/database.config');
const mongoose = require('mongoose');
const MoodModel = require('../models/mood.model');

MoodModel.create({
  date: Date.now(),
  mood: 'neutral',
  keywords: ['coding', 'friends'],
  activity: 'medium',
  weather: 'clouds',
})
  .then(() =>{
    mongoose.connection.close()
      .then(()=>{
        console.log('Data seeded')
      })
  })