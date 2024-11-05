// src/components/NavbarComponent.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import ProfileModal from './ProfileModal';
import CartModal from './CartModal';
import SellerRegistrationModal from './Auth/SellerRegistrationModal'; // Import the SellerRegistrationModal

const NavbarComponent = () => {
  // State for modals
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showSellerModal, setShowSellerModal] = useState(false); // State for seller registration modal

  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 123 456 7890',
    orders: [
      { id: '001', total: 199.99 },
      { id: '002', total: 49.99 },
      { id: '003', total: 29.99 },
    ],
  };

  // Sample cart data
  const cartItems = [
    { name: 'Smart Watch', price: 199.99, quantity: 1 },
    { name: 'Wireless Earbuds', price: 49.99, quantity: 2 },
  ];

  // Handlers to open and close the modals
  const handleShowProfile = () => setShowProfileModal(true);
  const handleCloseProfile = () => setShowProfileModal(false);
  const handleShowCart = () => setShowCartModal(true);
  const handleCloseCart = () => setShowCartModal(false);
  const handleShowSeller = () => setShowSellerModal(true); // Handler to show seller registration modal
  const handleCloseSeller = () => setShowSellerModal(false); // Handler to close seller registration modal

  return (
    <>
      <Navbar bg="white" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-black">
            <span style={{ color: '#50b8e7' }}>Easy</span>Buy
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
              <Nav.Link as={Link} to="/Home-appliences" className="text-black mx-3">Home Appliances</Nav.Link>
              <Nav.Link as={Link} to="/Gadgets" className="text-black mx-3">Gadgets</Nav.Link>
              <Nav.Link as={Link} to="/Pre-owned" className="text-black mx-3">Pre Owned</Nav.Link>
              <Nav.Link as={Link} to="/Contact-us" className="text-black mx-3">Contact us</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link onClick={handleShowSeller} className="text-black mx-3">Become a Seller</Nav.Link>
              <Nav.Link onClick={handleShowCart} className="text-black me-5">
                <FiShoppingCart size={24} />
              </Nav.Link>
              <Nav.Link className="text-black" onClick={handleShowProfile}>
                <FaRegUserCircle size={24} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Profile Modal */}
      <ProfileModal show={showProfileModal} handleClose={handleCloseProfile} user={user} />
      
      {/* Cart Modal */}
      <CartModal show={showCartModal} handleClose={handleCloseCart} cartItems={cartItems} />
      
      {/* Seller Registration Modal */}
      <SellerRegistrationModal show={showSellerModal} handleClose={handleCloseSeller} />
    </>
  );
};

export default NavbarComponent;
