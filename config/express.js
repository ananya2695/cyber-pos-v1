var express = require("express");
var bodyParser = require('body-parser');
var ejs = require('ejs');



module.exports = function() {
	var app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    require("../app/routes/product.route")(app);

    return app;

}