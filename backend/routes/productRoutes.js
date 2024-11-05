// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust the path based on your file structure

// Route to get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from MongoDB
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get products by category
router.get('/category/:category', async (req, res) => {
  const { category } = req.params;

  try {
    const filteredProducts = await Product.find({ category }); // Fetch products by category from MongoDB
    if (filteredProducts.length > 0) {
      res.json(filteredProducts);
    } else {
      res.status(404).json({ message: 'No products found in this category.' });
    }
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to add a new product
router.post('/', async (req, res) => {
  const { name, description, category } = req.body;

  try {
    const newProduct = new Product({ name, description, category });
    const savedProduct = await newProduct.save(); // Save the new product to MongoDB
    res.status(201).json(savedProduct); // Respond with the created product
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to update a product by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, category }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete a product by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
