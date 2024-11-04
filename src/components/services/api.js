// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // This will proxy to your backend server
});

export default api;
