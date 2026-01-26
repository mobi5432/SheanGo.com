const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Create booking
router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send("Booking successful");
});

// Get all bookings (admin)
router.get("/", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;
