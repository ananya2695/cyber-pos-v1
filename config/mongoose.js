var mongoose = require('mongoose');
var uri = "mongodb://localhost/cyber_pos"

module.exports = function() {
    var db = mongoose.connect(uri);


    require("../app/models/product.model");



    return db;



}
