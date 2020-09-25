const {Schema, model} = require('mongoose');

const UserSchema = new Schema(
  {
     username: {
       type: String,
       required: [true, 'Please enter username']
     }, 
     email: {
      type: String,
      required: [true, 'Please enter email']
    },
     passwordHash: {
      type: String,
      required: [true, 'Please enter password']
    }
  },
  {
    timestamps: true
  }
);

UserSchema.index({'email': 1}, {unique: true});
UserSchema.index({'username': 1}, {unique: true});

module.exports = model('user', UserSchema);