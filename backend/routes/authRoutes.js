// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /api/auth/login
// Body: { email, name? }
// Creates user if not exists and returns user document
router.post("/login", async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, name });
    }
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

// GET /api/auth/  -> list all users (for admin)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
