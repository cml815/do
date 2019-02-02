const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);


// Create a new product
router.post('/create', product_controller.product_create);

// Read an existing product
router.get('/:id', product_controller.product_details);

// Update inventory

router.put('/:id/update', product_controller.product_update);

// Delete product

router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;