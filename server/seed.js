const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected for seeding"))
  .catch(err => console.log("MongoDB error:", err));

const seedProducts = [
  { name: "Brake Pad", category: "Braking System", price: 1500, compatibility: ["Toyota 2015 Corolla"] },
  { name: "Oil Filter", category: "Engine Components", price: 500, compatibility: ["Honda 2020 Civic"] },
  { name: "Bumper", category: "Car Body and Main Parts", price: 3000, compatibility: ["Maruti 2018 Swift"] },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();