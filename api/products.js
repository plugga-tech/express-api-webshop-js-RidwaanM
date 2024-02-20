var express = require("express");
var router = express.Router();
const { ObjectId } = require("mongodb");


//Get all products
router.get("/", function (req, res, next) {
    req.app.locals.db.collection("products").find().toArray()
    .then(result => {
      res.send(result);
    })
});

//Add new
router.post("/add", function(req, res, next){
    req.app.locals.db.collection("products").insertOne(req.body)
    .then(result => {
      res.send(result)
    })
});


module.exports = router;