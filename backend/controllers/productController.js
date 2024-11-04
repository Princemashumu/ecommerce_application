// controllers/productController.js
const Product = require('../models/productModel');

// Create Product
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  try {
    const product = await Product.create({
      name,
      price,
      description,
      seller: req.user.id, // Assign the seller from the authenticated user
    });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Product creation failed', error: error.message });
  }
};

// Read Products (for buyers)
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

// Update Product (for sellers)
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  try {
    const product = await Product.findById(id);

    // Check if the product exists and if the user is the seller
    if (!product || product.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this product' });
    }

    product.name = name;
    product.price = price;
    product.description = description;

    await product.save();
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Product update failed', error: error.message });
  }
};

// Delete Product (for sellers)
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    // Check if the product exists and if the user is the seller
    if (!product || product.seller.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this product' });
    }

    await product.remove();
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Product deletion failed', error: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
