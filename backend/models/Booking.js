// models/Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  package: { type: mongoose.Schema.Types.ObjectId, ref: "Package", required: true },
  people: { type: Number, default: 1 },
  date: { type: Date, required: true },
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
