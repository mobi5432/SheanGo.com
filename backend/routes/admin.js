const express = require("express");
const router = express.Router();
const Package = require("../models/Package");
const Hotel = require("../models/Hotel");

// Add package
router.post("/add-package", async (req, res) => {
  const pkg = new Package(req.body);
  await pkg.save();
  res.send("Package added");
});

// Get packages
router.get("/packages", async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
});

// Add hotel
router.post("/add-hotel", async (req, res) => {
  const hotel = new Hotel(req.body);
  await hotel.save();
  res.send("Hotel added");
});

// Get hotels
router.get("/hotels", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

module.exports = router;
