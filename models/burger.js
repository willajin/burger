// import orm.js
var orm = require("../config/orm.js");

// code to call ORM functions using burger specific input
var burger = {
    // display all burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    }
};

module.exports = burger;