
var ctl = require("../controllers/payment.controller");

module.exports = function(app) {
	
    app.route("/payment")
    .get(ctl.getlist)
    .post(ctl.post);


    app.route("/payment/:_id")
    .get(ctl.get)
    .put(ctl.put)
    .delete(ctl.delete);
        
    app.param("_id",ctl.getById);

}
