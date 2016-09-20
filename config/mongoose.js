var mongoose = require('mongoose');
var uri = "mongodb://localhost/cyber_pos"

module.exports = function() {
    var db = mongoose.connect(uri);


    require("../app/models/product.model");
    require("../app/models/table.model");
    require("../app/models/login.model");
     require("../app/models/payment.model");


    return db;



}