var mongoose = require('mongoose');
var Login = mongoose.model('login', { 
	
	User_Name : String, 
	Position : String, 
	Email : String});
