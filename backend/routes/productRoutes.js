// routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware'); // Middleware to protect routes

const router = express.Router();

// Route to create a product (sellers only)
router.post('/', protect, createProduct);

// Route to get all products (buyers can access)
router.get('/', getProducts);

// Route to update a product (sellers only)
router.put('/:id', protect, updateProduct);

// Route to delete a product (sellers only)
router.delete('/:id', protect, deleteProduct);

module.exports = router;
