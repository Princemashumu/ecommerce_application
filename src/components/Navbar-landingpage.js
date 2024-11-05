// src/components/NavbarComponent.js

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import Register from './Auth/Register';
import Login from './Auth/Login';

const Navbarlandingpage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true); // Toggle between Register and Login

  // Function to open the modal
  const handleShowModal = () => setShowModal(true);

  // Function to close the modal
  const handleCloseModal = () => setShowModal(false);

  // Function to toggle between Register and Login forms
  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <Navbar bg="white" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* App Name with "Easy" in sky blue */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-black">
          <span style={{ color: '#50b8e7' }}>Easy</span>Buy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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

          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-black me-4">
              <FiShoppingCart size={24} />
            </Nav.Link>
            <Button 
              onClick={handleShowModal}  // Opens the modal
              style={{ backgroundColor: '#50b8e7', borderColor: '#50b8e7', borderRadius: '20px' }}
              className="text-white"
            >
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Register/Login Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isRegister ? 'Sign Up' : 'Log In'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isRegister ? (
            <Register closeModal={handleCloseModal} />
          ) : (
            <Login closeModal={handleCloseModal} />
          )}
          <p className="text-center mt-3">
            {isRegister ? (
              <>Already have an account?{' '}<span onClick={toggleForm} style={{ color: '#50b8e7', cursor: 'pointer' }}>Log in</span></>
            ) : (
              <>Don't have an account?{' '}<span onClick={toggleForm} style={{ color: '#50b8e7', cursor: 'pointer' }}>Sign up</span></>
            )}
          </p>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default Navbarlandingpage;
