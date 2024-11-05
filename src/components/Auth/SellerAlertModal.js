import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SellerAlertModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Seller Portal Access Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>To become a seller, please log in to our Seller Portal.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SellerAlertModal;
