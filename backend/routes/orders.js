const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Product = require("../models/Product");

// Hämta alla ordrar
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Något gick fel vid hämtning av ordrar", error: err.message });
  }
});

// Skapa en order
router.post("/", async (req, res) => {
  const { products } = req.body;

  if (!products || !Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ message: "Ordern måste innehålla minst en produkt" });
  }

  try {
    const orderProducts = [];

    for (const item of products) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({ message: `Produkt med ID ${item.productId} hittades inte` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Otillräckligt lager för ${product.name}` });
      }

      product.stock -= item.quantity;
      await product.save();

      orderProducts.push({ productId: item.productId, quantity: item.quantity });
    }

    const order = new Order({ products: orderProducts });
    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Något gick fel vid skapandet av ordern", error: err.message });
  }
});

module.exports = router;
