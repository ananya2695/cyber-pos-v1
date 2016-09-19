var modelData = require('mongoose').model('table');

exports.getlist = function(req, res, next) {
    modelData.find({}, function(err, data) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            console.log('success!!!');
            res.json(data);
        }
    });

};

exports.post = function(req, res, next) {
    // res.send("Hello User post!!!");

    var kitty = new modelData(req.body);
    kitty.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('success!!!');
            res.json(req.body);
        }
    });

};

exports.get = function(req, res, next) {
    res.json(req.data);

};

exports.delete = function(req, res, next) {
    req.data.remove(function(err){
        if (err) {
            console.log(err);
        } else {
            
            res.json(req.data);
        }
    });
 
};

exports.put = function(req, res, next) {
    var date = new Date();
    date.toISOString();
    req.body.Updated = date;
    modelData.findByIdAndUpdate(req.data._id, req.body, function(err, data) {
        // doc is a Document
        if (err) {
            console.log(err);
            return next(err);
        } else {
            res.json(req.body);
        }
    });
    

};
exports.getById = function(req, res, next, _id) {
    modelData.findById(_id, function(err, data) {
        // doc is a Document
        if (err) {
            console.log(err);
            return next(err);
        } else {
            req.data = data;
            next();
        }
    });
    

};
