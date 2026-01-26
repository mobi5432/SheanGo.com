const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/bookings", require("./routes/booking"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/packages", require("./routes/admin")); // for packages

// Test route
app.get("/", (req, res) => {
  res.send("Kashmir Tour API Running");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
