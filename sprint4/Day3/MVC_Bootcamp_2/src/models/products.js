//models
const mongoose = require("mongoose");

// product schema

const productSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
