const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User registered");
});

// Login (basic)
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found");
  res.send("Login success");
});

module.exports = router;
