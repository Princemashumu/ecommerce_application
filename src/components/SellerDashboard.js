import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Nav, Navbar, Modal, Form } from 'react-bootstrap';
import './SellerDashboard.css'; // Ensure the CSS file is correctly linked
import { Link } from 'react-router-dom';
import axios from 'axios'; // For making HTTP requests
import SellerNavBar from '../components/SellerNavBar';

const SellerDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Dashboard');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', category: '', price: '' });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState(null);

  // Fetch products from the API
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Determine products to display based on selected category
  const displayedProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.description || !newProduct.category || !newProduct.price || !imageFile) {
      alert('All fields are required.');
      return;
    }

    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description);
    formData.append('category', newProduct.category);
    formData.append('price', newProduct.price);
    formData.append('image', imageFile);

    try {
      const response = await axios.post('http://localhost:5000/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setProducts([...products, response.data]);
      setNewProduct({ name: '', description: '', category: '', price: '' });
      setImageFile(null);
      setShowModal(false);
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
          <Nav.Link href="#settings" className="sidebar-settings">Settings</Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
      <SellerNavBar/>
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

          {error && <div className="alert alert-danger">{error}</div>}

          <h3 className="my-4">
            {selectedCategory === 'Dashboard' ? 'Overview' : `${selectedCategory} Products`}
          </h3>
          <Row>
            {loading ? (
              <p>Loading products...</p>
            ) : (
              displayedProducts.map((product, index) => (
                <Col md={4} className="mb-4" key={product.id || index}>
                  <Card>
                    {product.image && <Card.Img variant="top" src={product.image} alt={product.name} />}
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text><strong>Price: </strong>${product.price}</Card.Text>
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
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formProductImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleFileChange}
                required
              />
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
