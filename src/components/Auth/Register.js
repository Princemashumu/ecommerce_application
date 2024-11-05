import React, { useState } from 'react';
import api from '../services/api.js';

const Register = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', { name, email, password });
      alert(response.data.message); // Notify user of successful registration
      closeModal(); // Close the modal
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        alert(error.response.data.message || 'Registration failed');
      } else if (error.request) {
        alert('No response received from server. Please try again later.');
      } else {
        alert('Error: ' + error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
