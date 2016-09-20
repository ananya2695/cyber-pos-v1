var mongoose = require('mongoose');
var Payment = mongoose.model('payment', { 
	
	Payment_Type : String, 
	Payment_Amount : Number
	});
