import "./Button.css";

export default function Button({ children, onClick, type = "button", variant = "primary", text }) {
  return (
    <button className={`nice-button ${variant}`} onClick={onClick} type={type}>
      {children}
      <p>{text}</p>
    </button>
  );
}
