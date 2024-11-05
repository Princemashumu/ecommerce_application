import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import './GadgetsSection.css';

const GadgetsSection = () => {
  return (
    <section className="container mt-5 gadgets-section">
      <div className="text-center">
        <h2 className="mt-4">Explore Our Gadgets</h2>
        <p>Stay up-to-date with the latest gadgets designed to make your daily life more fun and productive. Browse our collection for cutting-edge technology and innovative designs.</p>
      </div>

      <div className="scrolling-wrapper-container">
        <div className="scrolling-wrapper mt-4">
          {/* Gadget 1 */}
          <Card className="product-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Gadget Product 1" />
            <Card.Body>
              <Card.Title>Smart Watch</Card.Title>
              <Card.Text>$199.99</Card.Text>
              <Button className="skyblue-button">Buy Now</Button>
            </Card.Body>
          </Card>

          {/* Gadget 2 */}
          <Card className="product-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Gadget Product 2" />
            <Card.Body>
              <Card.Title>Wireless Earbuds</Card.Title>
              <Card.Text>$49.99</Card.Text>
              <Button className="skyblue-button">Buy Now</Button>
            </Card.Body>
          </Card>

          {/* Gadget 3 */}
          <Card className="product-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Gadget Product 3" />
            <Card.Body>
              <Card.Title>Portable Charger</Card.Title>
              <Card.Text>$29.99</Card.Text>
              <Button className="skyblue-button">Buy Now</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Side "See More" Button with Inline Styles */}
        <Button
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '2px solid skyblue',
            color: 'skyblue',
            transition: 'background-color 0.3s, color 0.3s',
            whiteSpace: 'nowrap',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '25px'
          }}
          variant="outline-primary"
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'skyblue';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'skyblue';
          }}
        >
          See More <FaChevronRight style={{ marginLeft: '0.5rem' }} />
        </Button>
      </div>
    </section>
  );
};

export default GadgetsSection;
