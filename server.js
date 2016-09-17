
var express = require("./config/express");
var mongoose = require("./config/mongoose");
var db = mongoose();

// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });


var app = express();




app.listen(3300);





console.log('hello node');