// src/components/NavbarComponent.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import ProfileModal from './ProfileModal';
import CartModal from './CartModal';
import SellerRegistrationModal from './Auth/SellerRegistrationModal'; // Import the SellerRegistrationModal

const SellerNavBar = () => {
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
  // const handleShowCart = () => setShowCartModal(true);
  const handleCloseCart = () => setShowCartModal(false);
  // const handleShowSeller = () => setShowSellerModal(true); // Handler to show seller registration modal
  const handleCloseSeller = () => setShowSellerModal(false); // Handler to close seller registration modal

  return (
    <>
      <Navbar bg="white" variant="dark" expand="lg" sticky="top">
        <Container>
        <Nav.Link className="text-black" onClick={handleShowProfile}>
                <FaRegUserCircle size={30} />
              </Nav.Link>
         

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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

export default SellerNavBar;
