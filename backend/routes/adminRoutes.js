const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Booking = require("../models/Booking");
const Package = require("../models/Package"); // make sure you have this

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // don’t return password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("package", "title price");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all packages
router.get("/packages", async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
