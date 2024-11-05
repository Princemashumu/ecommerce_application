// controllers/userController.js
const User = require('../models/userModel'); // Assuming you have a User model defined

// Function to register a new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Logic to register user
        const newUser = await User.create({ name, email, password });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error: error.message });
    }
};

// Function to login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // Logic for user login
};

// Function to register a seller
const registerSeller = async (req, res) => {
    const { name, email, password } = req.body;
    const role = 'Seller'; // Default role for seller

    try {
        // Logic to register seller
        const newSeller = await User.create({ name, email, password, role });
        res.status(201).json({ message: 'Seller registered successfully', user: newSeller });
    } catch (error) {
        res.status(400).json({ message: 'Error registering seller', error: error.message });
    }
};

module.exports = { registerUser, loginUser, registerSeller };
