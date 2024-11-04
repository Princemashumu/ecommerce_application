// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Auth routes
const authRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Import product routes

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // Register product routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
