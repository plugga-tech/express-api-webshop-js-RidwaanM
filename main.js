const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Anslut till MongoDB
mongoose.connect('mongodb://localhost:27017/ridwaan-mohamed', { useNewUrlParser: true, useUnifiedTopology: true });

// Definiera schema och modell för produkter
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantityInStock: Number,
});

const Product = mongoose.model('Product', productSchema);

// Endpoints för G krav
app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});


// Starta servern
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});