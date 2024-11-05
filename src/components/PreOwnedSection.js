// src/components/PreOwnedSection.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import './PreOwnedSection.css';

const PreOwnedSection = () => {
  return (
    <section className="container mt-5 pre-owned-section">
      <div className="text-center">
        <h2 className="mt-4">Explore Our Pre-Owned Collection</h2>
        <p>Find quality pre-owned items at a fraction of the price. Each item is carefully inspected to ensure it meets our quality standards.</p>
      </div>

      <div className="d-flex align-items-center">
        {/* Product placeholders */}
        <Row className="mt-4 flex-grow-1">
          {/* Pre-Owned Product 1 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Pre-Owned Product 1" />
              <Card.Body>
                <Card.Title>Refurbished Laptop</Card.Title>
                <Card.Text>$299.99</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Pre-Owned Product 2 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Pre-Owned Product 2" />
              <Card.Body>
                <Card.Title>Used Smartphone</Card.Title>
                <Card.Text>$199.99</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Pre-Owned Product 3 */}
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Pre-Owned Product 3" />
              <Card.Body>
                <Card.Title>Second-Hand Headphones</Card.Title>
                <Card.Text>$49.99</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* See More button on the side */}
        <div className="see-more-side-button">
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
          See More <FaChevronRight style={{ marginLeft: '0.5rem'  }} />
        </Button>
        </div>
      </div>
    </section>
  );
};

export default PreOwnedSection;
