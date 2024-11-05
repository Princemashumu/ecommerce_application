// src/components/ProfileModal.js
import React from 'react';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

const ProfileModal = ({ show, handleClose, user }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>My Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="border-0 mb-3">
          <Card.Body>
            <Card.Title>User Information</Card.Title>
            <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
            <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
            <Card.Text><strong>Phone:</strong> {user.phone}</Card.Text>
          </Card.Body>
        </Card>
        
        <Card className="border-0">
          <Card.Body>
            <Card.Title>Your Orders</Card.Title>
            <ListGroup>
              {user.orders.map((order, index) => (
                <ListGroup.Item key={index}>
                  <strong>Order ID:</strong> {order.id} - <strong>Total:</strong> ${order.total}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Edit Profile</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
