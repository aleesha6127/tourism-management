const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Place", placeSchema);
