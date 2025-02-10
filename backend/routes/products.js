const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Hämta alla produkter
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Skapa en produkt (mockdata)
router.post("/", async (req, res) => {
  const product = new Product({
    name: "Produkt 1",
    price: 100,
    stock: 10,
    image: "https://via.placeholder.com/150",
  });
  await product.save();
  res.json(product);
});

module.exports = router;
