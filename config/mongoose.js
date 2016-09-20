var mongoose = require('mongoose');
var uri = "mongodb://localhost/cyber_pos"

module.exports = function() {
    var db = mongoose.connect(uri);


    require("../app/models/product.model");
    require("../app/models/table.model");
    require("../app/models/login.model");
<<<<<<< HEAD
     require("../app/models/payment.model");
=======
    require("../app/models/OrderHeader.model");
>>>>>>> 89d0a16c1cac58425f7409dafbe6b05cc1b049d0


    return db;



}