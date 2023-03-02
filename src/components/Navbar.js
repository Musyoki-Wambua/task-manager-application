import React, { useState } from "react";
import Modal from "react-modal";
import LoginForm  from "./Login";
const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <button onClick={handleLoginClick}>Login</button>
        </li>
      </ul>

      <Modal
        isOpen={showLoginModal}
        onRequestClose={handleLoginModalClose}
        contentLabel="Login Modal"
      >
        <LoginForm closeModal={handleLoginModalClose} />
      </Modal>
    </nav>
  );
};

export default Navbar;
