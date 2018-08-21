var connection = require ('./connection.js');

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
              }
              console.log(result);
              cb(result);
        });
    },
    insertOne: function(tableName, valueOne, valueTwo, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableName, valueOne, valueTwo], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(tableName, valueOne, condition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [tableName, valueOne, condition], function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    }
};

///////////////////////////////////////////////////////////////////

module.exports = orm;
