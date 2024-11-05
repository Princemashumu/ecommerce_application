import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Nav, Navbar, Modal, Form } from 'react-bootstrap';
import NavbarComponent from './SellerNavBar';
import './SellerDashboard.css'; // Import custom styles for the sidebar
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const SellerDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Dashboard');
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State for loading
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [newProduct, setNewProduct] = useState({ name: '', description: '', category: '' }); // State for new product data

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products'); // Adjust endpoint as needed
      setProducts(response.data); // Assuming the API returns a list of products
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products when the component mounts

  // Determine which products to display based on selected category
  const displayedProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory); // Adjust to match your API data structure

  // Handle product form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  // Handle form submission to add a new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products', newProduct); // Adjust endpoint as needed
      console.log('Product added:', response.data); // Log the response
      setProducts([...products, response.data]); // Update products state with the new product
      setNewProduct({ name: '', description: '', category: '' }); // Reset form fields
      setShowModal(false); // Close the modal
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      alert('Failed to add product. Please check the console for details.');
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        <Navbar.Brand as={Link} to="/SellerDashBoard" className="fw-bold sidebar-brand">
          <span style={{ color: '#50b8e7' }}>Easy</span>Buy
        </Navbar.Brand>
        <Nav className="flex-column menu-items">
          <Nav.Link onClick={() => setSelectedCategory('All')}>All Products</Nav.Link>
          <Nav.Link onClick={() => setSelectedCategory('Home Appliances')}>Home Appliances</Nav.Link>
          <Nav.Link onClick={() => setSelectedCategory('Gadgets')}>Gadgets</Nav.Link>
          <Nav.Link onClick={() => setSelectedCategory('Pre Owned')}>Pre Owned</Nav.Link>
        </Nav>
        <Nav className="flex-column mt-auto">
          <Nav.Link href="#settings" className="sidebar-settings">
            Settings
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <NavbarComponent />
        <Container>
          <Card className="text-center my-4">
            <Card.Body>
              <Card.Title>Seller Dashboard</Card.Title>
              <Card.Text>
                Welcome, Seller! Here you can manage your products and view your sales performance.
              </Card.Text>
              <Button variant="primary" className="m-2" onClick={() => setShowModal(true)}>
                Add Product
              </Button>
            </Card.Body>
          </Card>

          {/* Product List Section */}
          <h3 className="my-4">
            {selectedCategory === 'Dashboard' ? 'Overview' : `${selectedCategory} Products`}
          </h3>
          <Row>
            {loading ? (
              <p>Loading products...</p>
            ) : (
              displayedProducts.map((product) => (
                <Col md={4} className="mb-4" key={product.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Button variant="outline-primary" className="m-1">Edit</Button>
                      <Button variant="outline-danger" className="m-1">Delete</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
            {displayedProducts.length === 0 && selectedCategory !== 'Dashboard' && !loading && (
              <p>No products available for this category.</p>
            )}
          </Row>
        </Container>
      </div>

      {/* Add Product Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={newProduct.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Pre Owned">Pre Owned</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SellerDashboard;
