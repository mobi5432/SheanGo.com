const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number
});

module.exports = mongoose.model("Hotel", HotelSchema);
