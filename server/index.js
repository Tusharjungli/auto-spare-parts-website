const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Product = require("./models/Product");
const Feedback = require("./models/Feedback");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

// Routes
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/api/feedback", async (req, res) => {
  const { name, email, message } = req.body;
  const feedback = new Feedback({ name, email, message });
  await feedback.save();
  res.json({ message: "Feedback saved!" });
});

app.get("/", (req, res) => {
  res.send("Hello, Auto Spare Parts!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});