const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

const app = express();

app.use(express.json()); // Parse JSON bodies

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

app.get("/", (req, res) => {
  res.send("Hello, Auto Spare Parts!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});