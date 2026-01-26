const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  title: String,
  days: Number,
  places: [String],
  price: Number,
  description: String
});

module.exports = mongoose.model("Package", PackageSchema);
