var express = require("express");
var router = express.Router();
const { ObjectId } = require("mongodb");


//Get all users
router.get("/", function (req, res, next) {
    req.app.locals.db.collection("users").find().toArray()
    .then(result => {
      res.send(result);
    })
});



//Add new user
router.post("/add", function(req, res, next) {
    req.app.locals.db.collection("users").insertOne(req.body)
    .then(result => {
      res.send(result);
    })
  });
  
  module.exports = router;