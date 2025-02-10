const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");

// Skapa en order
router.post("/", async (req, res) => {
  const { products } = req.body;

  // Minska lagersaldo
  for (const item of products) {
    const product = await Product.findById(item.productId);
    if (!product || product.stock < item.quantity) {
      return res.status(400).json({ message: "Insufficient stock" });
    }
    product.stock -= item.quantity;
    await product.save();
  }

  const order = new Order({ products });
  await order.save();
  res.json(order);
});

module.exports = router;
