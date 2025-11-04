import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate EmailJS, a backend API, etc.
    alert("Mulțumim pentru mesaj! Vom reveni în curând.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="overlay">
          <h1>Contactează-ne</h1>
          <p>Suntem mereu deschiși la colaborare, voluntariat și inițiative de suflet.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Informații de contact</h2>
          <p>
            <strong>Email:</strong> contact@ghindeleavramiancu.ro
          </p>
          <p>
            <strong>Telefon:</strong> +40 743 000 000
          </p>
          <p>
            <strong>Adresă:</strong> Câmpeni, Județul Alba, România
          </p>
          <p>
            Urmărește-ne și pe rețelele sociale pentru a afla despre următoarele noastre acțiuni de
            voluntariat și evenimente.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Trimite-ne un mesaj</h2>
          <div className="form-group">
            <label htmlFor="name">Nume</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Scrie numele tău..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="exemplu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Scrie mesajul tău aici..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Trimite
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
