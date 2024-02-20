var express = require("express");
var router = express.Router();
const { ObjectId } = require("mongodb");


// Get all orders
router.get("/all", function(req, res) {
  
  req.app.locals.db.collection("orders").find().toArray()
  .then (result => {
    res.send(result);    
  })
});
  

//Add new order
router.post("/add", function(req, res, next) {
  req.app.locals.db.collection("orders").insertOne(req.body)
  .then(result => {
    res.send(result);
  })
});

module.exports = router;