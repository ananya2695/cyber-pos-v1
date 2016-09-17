var mongoose = require('mongoose');
var Cat = mongoose.model('product', {
    product_name: String,
    product_price: Number
    
});
