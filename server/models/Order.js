const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [{ name: String, price: Number }],
  total: { type: Number, required: true },
  razorpayOrderId: { type: String, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);