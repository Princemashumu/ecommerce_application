// src/components/Auth/Register.js
import React, { useState } from 'react';
import api from '../services/api.js';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', { name, email, password });
      
      alert(response.data.message); // Notify user on registration
    } catch (error) {
      console.error('Error:', error); // Log error to console for debugging
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert(error.response.data.message || 'Registration failed'); // Use error message from response
      } else if (error.request) {
        // The request was made but no response was received
        alert('No response received from server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        alert('Error: ' + error.message);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
