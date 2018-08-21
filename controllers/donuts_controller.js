var express = require("express");
var donut = require("../models/donut.js");

var router = express.Router();

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}



router.get("/", function(req, res) {
    donut.selectAll(function(data) {
      var hbsObject = {
        donuts: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/donuts", function(req, res) {
    donut.insertOne([
      'donut_name'
    ], [
      req.body.donut_name
    ], function(data) {
      res.redirect('/');
    });
  });

  router.put("/donuts/:id", function(req, res) {
    var condition = 'id = ' + req.params.id;
  
    console.log('condition', condition);
  
    donut.updateOne({devoured: 1}, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.redirect('/');
      }
    });
  });
  
module.exports = router;