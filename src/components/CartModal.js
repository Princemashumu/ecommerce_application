// src/components/CartModal.js
import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const CartModal = ({ show, handleClose, cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cartItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <strong>{item.name}</strong> - ${item.price} x {item.quantity}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 text-start">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
