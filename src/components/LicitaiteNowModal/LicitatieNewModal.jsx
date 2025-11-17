// NewBidModal.jsx
import React, { useState } from "react";
import Modal from "../LicitatieModal/LicitatieModal";
import { supabase } from "../../supabase";
import { useAuth } from "../../context/AuthContext";

export default function NewBidModal({ onClose, productItem, actualPrice, onSuccess }) {
  const [form, setForm] = useState({
    amount: "",
  });

  const {user} = useAuth()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(productItem)

  const handleSubmit =async e => {
    e.preventDefault();
    console.log("Bid submitted:", form);

    const { data, error } = await supabase
    .from("products")
    .update({
      last_offer: form.amount,
      user_with_last_offer: user.id,
      second_to_last_offer: actualPrice,
      time_of_last_offer: new Date().toISOString()
    })
    .eq("name", productItem); 

    if (error) {
      console.error("INSERT ERROR:", error.message);
      return;
    }

    console.log("SUCCESS:", data);
    onSuccess();
    onClose(); // close modal after submit
  };

  return (
    <Modal onClose={onClose}>
      <h2>Adaugă Licitație</h2>

      <form onSubmit={handleSubmit} className="modal-form">

        <input
          type="number"
          name="amount"
          placeholder="Sumă"
          value={form.amount}
          onChange={handleChange}
          required
        />

        <button type="submit" className="modal-submit">Trimite</button>
      </form>
    </Modal>
  );
}
