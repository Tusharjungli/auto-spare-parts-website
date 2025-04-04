const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  compatibility: [String], // e.g., ["Toyota 2015 Corolla", "Honda 2020 Civic"]
});

module.exports = mongoose.model("Product", productSchema);