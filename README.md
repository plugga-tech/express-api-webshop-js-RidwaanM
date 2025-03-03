# Webbutik API  

Detta är ett API för en webbutik, byggt med **Node.js**, **Express** och **MongoDB**. API:et hanterar produkter och ordrar och följer en RESTful-struktur.  

## Funktioner  
✅ Skapa och hämta produkter  
✅ Skapa ordrar och minska lagersaldo  
✅ Användning av **MongoDB** för datalagring  
✅ API byggt med **Express**  


## Starta servern

npm start
eller
node server.js

# API-dokumentation
Produkter
Hämta alla produkter

GET /products
# Skapa en ny produkt

POST /products
Content-Type: application/json

{
  "name": "Produkt 1",
  "price": 100,
  "stock": 10,
  "image": "https://via.placeholder.com/150"
}

## Ordrar
Skapa en order

POST /orders
Content-Type: application/json

{
  "products": [
    { "productId": "67ab749d3c58951406027f9e", "quantity": 2 }
  ]
}


# env

PORT=5000
MONGO_URI=mongodb://localhost:27017/ridwaan-mohamed

## Teknologier
Node.js
Express.js
MongoDB & Mongoose
REST API