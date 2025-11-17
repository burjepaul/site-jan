import React from "react";
import "./LicitatieModal.css";

export default function Modal({ children, onClose }) {

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}
