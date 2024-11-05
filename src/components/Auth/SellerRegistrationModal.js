import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import SellerAlertModal from './SellerAlertModal'; // Import the alert modal

const RegistrationModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showRegistration, setShowRegistration] = useState(false); // Track which modal to show

  const handleSellerAlertClose = () => {
    setShowRegistration(true); // Show registration modal after closing the alert
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (isLogin) {
        const response = await api.post('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/home');
        handleClose();
      } else {
        const response = await api.post('/auth/register', { name, email, password });
        if (response.status === 201) {
          setSuccessMessage(response.data.message);
          alert(response.data.message);
          handleClose();
        } else {
          setErrorMessage('Registration failed, please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        setErrorMessage(error.response.data.message || (isLogin ? 'Login failed' : 'Registration failed'));
      } else if (error.request) {
        setErrorMessage('No response received from server. Please try again later.');
      } else {
        setErrorMessage('Error: ' + error.message);
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleCloseModal = () => {
    handleClose();
    resetForm();
    setShowRegistration(false); // Reset to show the SellerAlertModal first on next open
  };

  return (
    <>
      {/* Show Seller Alert Modal initially */}
      {!showRegistration && (
        <SellerAlertModal show={show} handleClose={handleSellerAlertClose} />
      )}

      {/* Show Registration/Login Modal only if showRegistration is true */}
      {showRegistration && (
        <Modal show={show} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{isLogin ? 'Login' : 'Register as Buyer/Seller'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <Form onSubmit={handleSubmit}>
              {!isLogin && (
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </Form>
            <div className="mt-3 text-center">
              <p>
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <Link to="#" onClick={toggleForm}>
                  {isLogin ? 'Register' : 'Login'}
                </Link>
              </p>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default RegistrationModal;
