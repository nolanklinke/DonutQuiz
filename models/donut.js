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
    updateOne: function(columnOne, valueOne, columnTwo, valueTwo, condition, cb) {
        orm.updateOne("donuts", columnOne, valueOne, columnTwo, valueTwo, condition, function(res) {
            cb(res);
        })
    }
};

////////////////////////////
module.exports = donut;


