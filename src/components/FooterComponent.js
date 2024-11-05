// src/components/FooterComponent.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We provide high-quality home appliances, gadgets, and pre-owned items at competitive prices. Our goal is to make life easier with the best products and customer service.</p>
          </Col>
          
          {/* Centered Quick Links */}
          <Col md={4} className="d-flex flex-column align-items-center">
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column align-items-center">
              <li><a href="/Seller" className="text-white">Become a seller</a></li>
              <li><a href="/terms" className="text-white">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@easybuy.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Follow us on social media for the latest updates!</p>
            <div className="d-flex gap-3 mt-2">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
        
        <div className="text-center mt-3">
          <small>&copy; {new Date().getFullYear()} EasyBuy. All rights reserved.</small>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
