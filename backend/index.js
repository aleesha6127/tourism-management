const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const packageRoutes = require("./routes/packageRoutes");
const placeRoutes = require("./routes/placeRoutes");
const bookingRoutes = require("./routes/bookingRoutes"); // NEW
const app = express();
const adminRoutes = require("./routes/adminRoutes");

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/bookings", bookingRoutes); // NEW
app.use("/api/admin", adminRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Tourism Management API is running...");
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
