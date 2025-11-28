// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const User = require("../models/User");
const Package = require("../models/Package");

// POST /api/bookings
router.post("/", async (req, res) => {
  try {
    const { userEmail, packageId, date, people, price } = req.body;

    // 1. find user
    const user = await User.findOne({ email: userEmail });
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2. find package
    const pkg = await Package.findById(packageId);
    if (!pkg) return res.status(404).json({ message: "Package not found" });

    // 3. create booking
    const booking = new Booking({
      user: user._id,
      package: pkg._id,
      date: new Date(date),
      people,
      price,
    });

    await booking.save();

    // 4. populate user + package for response
    const populated = await Booking.findById(booking._id)
      .populate("user", "name email")
      .populate("package", "title location price");

    res.status(201).json(populated);
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/bookings -> admin dashboard
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("package", "title location price")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    console.error("Fetch bookings error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
