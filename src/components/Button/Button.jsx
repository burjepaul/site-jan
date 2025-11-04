import React from "react";
import "./Button.css";

function Button({ label, onClick, type = "primary" }) {
  return (
    <button
      className={`custom-btn ${type}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
