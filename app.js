document.addEventListener('DOMContentLoaded', async () => {
    const productsContainer = document.getElementById('products');

    // Hämta produkter från API
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    // Visa produkter i frontend
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Pris: ${product.price}</p>`;
        productsContainer.appendChild(productDiv);
    });
});