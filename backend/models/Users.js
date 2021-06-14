const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: false },
    password: { type: Number, required: true },
  });
  
  module.exports = mongoose.model('Users', userSchema);