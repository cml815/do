const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

/* exports.index = function(req, res, next) {   
    res.send('NOT IMPLEMENTED: Site Home Page');
} */

exports.index = function(req, res){
  Product.find(function(err, products) {
    res.send(products);
  });
};

// Create and save product 
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};
 
// Read inventory function
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            return next(err);
        }
        res.send(product);
    })
};


// Update

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

// Delete

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};