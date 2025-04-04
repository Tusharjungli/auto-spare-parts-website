const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Razorpay = require("razorpay");
require("dotenv").config();
const Product = require("./models/Product");
const Feedback = require("./models/Feedback");
const Order = require("./models/Order");

const app = express();

app.use(express.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

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

app.post("/api/create-order", async (req, res) => {
  const { amount, products } = req.body;
  const options = {
    amount: amount * 100, // Razorpay expects amount in paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    const newOrder = new Order({
      products,
      total: amount,
      razorpayOrderId: order.id,
    });
    await newOrder.save();
    res.json({ orderId: order.id, key: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, Auto Spare Parts!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});