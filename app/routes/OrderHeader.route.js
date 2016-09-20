var ctl = require("../controllers/OrderHeader.controller");

module.exports = function(app) {
	
    app.route("/OrderHeader")
    .get(ctl.getlist)
    .post(ctl.post);


    app.route("/OrderHeader/:_id")
    .get(ctl.get)
    .put(ctl.put)
    .delete(ctl.delete);
        
    app.param("_id",ctl.getById);

}
