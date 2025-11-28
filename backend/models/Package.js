const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  oldPrice: Number,
  duration: String,
  location: String,
  people: String,
  rating: Number,
  reviews: Number,
  image: String,
  inclusions: String, // comma separated inclusions
});

module.exports = mongoose.model("Package", PackageSchema);
