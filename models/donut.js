var orm = require("../config/orm.js");

var donut = {
    selectAll: function(cb) {
        orm.selectAll("donuts", function(res) {
            cb(res);
        });
    },
    insertOne: function(valueOne, valueTwo, cb) {
        orm.insertOne("donuts", valueOne, valueTwo, function(res) {
            cb(res);
        })
    },
    updateOne: function(valueOne, condition, cb) {
        orm.updateOne("donuts", valueOne, condition, function(res) {
            cb(res);
        })
    }
};

////////////////////////////
module.exports = donut;


