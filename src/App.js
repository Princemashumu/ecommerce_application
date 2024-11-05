// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import SellerDashboard from './components/SellerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Initial Landing Page */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} /> {/* Protected Home Page */}
        <Route path="/SellerDashboard" element={<SellerDashboard/>} />
      </Routes>
    </Router>
  );
};

export default App;
