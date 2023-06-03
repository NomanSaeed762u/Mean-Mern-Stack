//models
const mongoose = require("mongoose");

// product schema

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model("User", Userschema);

module.exports = User;
