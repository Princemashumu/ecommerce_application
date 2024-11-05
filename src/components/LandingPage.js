// src/components/LandingPage.js
import React from 'react';
import Navbarlandingpage from './Navbar-landingpage';
import { Container } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <div>
      <Navbarlandingpage />
      <Container className="text-center mt-5">
        <h1>Welcome to EasyBuy!</h1>
        <p>Your one-stop shop for all your needs. Explore our collection of home appliances, gadgets, and more.</p>
        <p>Start shopping with <span style={{ color: '#50b8e7' }}>EasyBuy</span> today!</p>
      </Container>
    </div>
  );
};

export default LandingPage;
