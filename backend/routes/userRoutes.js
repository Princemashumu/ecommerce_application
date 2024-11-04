// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController'); // Import both functions

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

module.exports = router;
