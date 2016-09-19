var ctl = require("../controllers/table.controller");

module.exports = function(app) {
	
    app.route("/table")
    .get(ctl.getlist)
    .post(ctl.post);


    app.route("/table/:_id")
    .get(ctl.get)
    .put(ctl.put)
    .delete(ctl.delete);
        
    app.param("_id",ctl.getById);

}
