const express = require("express");
const router = express.Router();
const Package = require("../models/Package");

// Get all packages
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a package
router.post("/", async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.json(newPackage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
