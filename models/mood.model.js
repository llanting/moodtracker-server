const {Schema, model} = require('mongoose');

const MoodSchema = new Schema(
  {
    date: {
      type: Date,
    },
    mood: {
      type: String,
      enum: ['sad', 'happy', 'neutral', 'depressed'],
      required: true
    },
    keywords: [{
      type: String,
    }],
    weather: {
      type: String,
      enum: ['sunny', 'rain', 'clouds'],
      required: true
    },
    activity: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('mood', MoodSchema);