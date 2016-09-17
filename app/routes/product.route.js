var ctl = require("../controllers/product.controller");

module.exports = function(app) {
	
    app.route("/product")
    .get(ctl.getlist)
    .post(ctl.post);


    app.route("/product/:_id")
    .get(ctl.get)
    .put(ctl.put)
    .delete(ctl.delete);
        
    app.param("_id",ctl.getById);

}
