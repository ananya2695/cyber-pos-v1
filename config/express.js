var express = require("express");
var bodyParser = require('body-parser');
var ejs = require('ejs');



module.exports = function() {
	var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    require("../app/routes/product.route")(app);
    require("../app/routes/table.route")(app);
    require("../app/routes/login.route")(app);
<<<<<<< HEAD
    require("../app/routes/payment.route")(app);
=======
     require("../app/routes/OrderHeader.route")(app);
>>>>>>> 89d0a16c1cac58425f7409dafbe6b05cc1b049d0

    return app;

}
