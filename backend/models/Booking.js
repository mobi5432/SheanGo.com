const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  packageName: String,
  people: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
