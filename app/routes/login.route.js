
var ctl = require("../controllers/login.controller");

module.exports = function(app) {
	
    app.route("/login")
    .get(ctl.getlist)
    .post(ctl.post);


    app.route("/login/:_id")
    .get(ctl.get)
    .put(ctl.put)
    .delete(ctl.delete);
        
    app.param("_id",ctl.getById);

}
