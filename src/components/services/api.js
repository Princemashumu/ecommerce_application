// src/services/api.js
import axios from 'axios';

// Create an instance of Axios with your backend base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this URL to your backend
});

export default api;
