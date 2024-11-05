import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import './HomeAppliancesSection.css';

const HomeAppliancesSection = () => {
  return (
    <section className="container mt-5 home-appliances-section">
      <div className="text-center">
        <h2 className="mt-4">Explore Our Home Appliances</h2>
        <p>Discover a range of high-quality home appliances that make your life easier and more convenient. From kitchen gadgets to cleaning devices, we have everything you need to elevate your home experience.</p>
      </div>

      <div className="scrolling-wrapper-container">
        <div className="scrolling-wrapper mt-4">
          {/* Product 1 */}
          <Card className="product-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Home Appliance Product 1" />
            <Card.Body>
              <Card.Title>Smart Blender</Card.Title>
              <Card.Text>$79.99</Card.Text>
              <Button className="skyblue-button">Buy Now</Button>
            </Card.Body>
          </Card>

          {/* Product 2 */}
          <Card className="product-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Home Appliance Product 2" />
            <Card.Body>
              <Card.Title>Robot Vacuum</Card.Title>
              <Card.Text>$129.99</Card.Text>
              <Button className="skyblue-button">Buy Now</Button>
            </Card.Body>
          </Card>

          {/* Product 3 */}
          <Card className="product-card">
            <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Home Appliance Product 3" />
            <Card.Body>
              <Card.Title>Air Purifier</Card.Title>
              <Card.Text>$59.99</Card.Text>
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
          See More <FaChevronRight style={{ marginLeft: '0.5rem'  }} />
        </Button>
      </div>
    </section>
  );
};

export default HomeAppliancesSection;
