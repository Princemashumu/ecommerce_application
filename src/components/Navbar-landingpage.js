// src/components/NavbarComponent.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Navbarlandingpage = () => {
  return (
    <Navbar bg="white" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* App Name with "Easy" in sky blue */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-black">
          <span style={{ color: '#50b8e7' }}>Easy</span>Buy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Menu Items */}
          <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
            <Nav.Link as={Link} to="/Home-appliences" className="text-black mx-3">
              Home Appliances
            </Nav.Link>
            <Nav.Link as={Link} to="/Gadgets" className="text-black mx-3">
              Gadgets
            </Nav.Link>
            <Nav.Link as={Link} to="/Pre-owned" className="text-black mx-3">
              Pre Owned
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact-us" className="text-black mx-3">
              Contact us
            </Nav.Link>
          </Nav>

          {/* Right-aligned Cart Icon and Buy Now Button */}
          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-black me-4">
              <FiShoppingCart size={24} />
            </Nav.Link>
            <Button 
              as={Link} 
              to="/buy-now" 
              style={{ 
                backgroundColor: '#50b8e7', 
                borderColor: '#50b8e7', 
                borderRadius: '20px' 
              }}
              className="text-white"
            >
              Buy Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarlandingpage;
