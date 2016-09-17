var mongoose = require('mongoose');
var Product = mongoose.model('product', {
    product_name: String,
    product_price: Number
    
});
