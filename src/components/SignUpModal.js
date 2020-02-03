import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import SignUp from "./SignUp";

const LoginModal = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="SignUp">Welcome to Shareable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp />
          <Modal.Footer>
            <span>Already have an account?</span>
            <NavLink to="/login">
              <Button variant="outline-secondary">Login!</Button>
            </NavLink>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
