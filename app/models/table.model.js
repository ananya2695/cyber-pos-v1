var mongoose = require('mongoose');
var Table = mongoose.model('table', { 
	// table_Id: String , 
	table_Name : String, 
	user_Id : String, 
	Order : String});
