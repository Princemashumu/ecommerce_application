// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, registerSeller } = require('../controllers/userController'); // Import both functions

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

// Seller Registration Route
router.post('/register/seller', registerSeller); // New endpoint for seller registration

module.exports = router;
