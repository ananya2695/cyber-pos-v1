var mongoose = require('mongoose');
var OrderHeader = mongoose.model('OrderHeader', {
    table_id : String,
    cust_id : String,
    user_id : String,
    user_name : String,
    net_amount : Number,
    tax : Number,
    order_id : String
    
});
