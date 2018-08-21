var express = require("express");
var donut = require("../models/donut.js");

var router = express.Router();

router.get("/", function(req, res) {
    donut.selectAll(function(data) {
      var hbsObject = {
        donuts: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post('/donuts', function(req, res) {
    donut.insertOne([
      'donut_name'
    ], [
      req.body.donut_name
    ], function(data) {
      res.redirect('/');
    });
  });

  router.put("/donuts/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    donut.updateOne({devoured: req.body.devoured}, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.redirect('/');
      }
    });
  });
  
module.exports = router;