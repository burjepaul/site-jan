import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./AuthModal.css";

export default function AuthModalManager() {
  const [activeModal, setActiveModal] = useState(null); // 'login' | 'signup' | null

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="auth-buttons-container">
      {/* Buttons */}
      <button className="auth-btn" onClick={() => openModal("login")}>
        Login
      </button>
      <button className="auth-btn signup" onClick={() => openModal("signup")}>
        Sign Up
      </button>

      {/* Overlay + Modal */}
      {activeModal && (
        <div className="auth-overlay" onClick={closeModal}>
          <div
            className="auth-modal"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-btn" onClick={closeModal}>
              ×
            </button>

            {activeModal === "login" && <Login onClose={closeModal}/>}
            {activeModal === "signup" && <Signup onClose={closeModal}/>}
          </div>
        </div>
      )}
    </div>
  );
}
