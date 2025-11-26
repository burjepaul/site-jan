// NewBidModal.jsx
import React, { useState } from "react";
import Modal from "../LicitatieModal/LicitatieModal";
import { supabase } from "../../supabase";
import { useAuth } from "../../context/AuthContext";
import "./LicitatieNewModal.css"

export default function NewBidModal({ onClose, productItem, actualPrice, onSuccess }) {
  const [amount, setAmount] = useState();
  const [toLow, setToLow] = useState(false);

  const {user} = useAuth()

  const handleChange = e => {
    setAmount(e.target.value);
  };

  console.log(user.email)

  const insertTranzacte = async() => {
    const { data, error } = await supabase
    .from("tranzactii")
    .insert({
      product_no: productItem,
      offer: amount,
      user_id: user.id,
      previous_offer: actualPrice,
      time_of_offer: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
      user_email: user.email
    })
    .select(); // optional: returns inserted row(s)

    if (error) {
      console.error("INSERT ERROR:", error.message);
      return;
    }
    console.log("Inserted row:", data);
  }


  const handleSubmit =async e => {
    e.preventDefault();
    console.log("Bid submitted:", amount);

    console.log(amount, actualPrice)

    if (amount < actualPrice + 10){
      console.log("prea mic pretul2")
      setToLow(true);
    }
    else{
      const { data, error } = await supabase
      .from("products")
      .update({
        last_offer: amount,
        user_with_last_offer: user.id,
        second_to_last_offer: actualPrice,
        time_of_last_offer: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        bid_started: true
      })
      .eq("name", productItem); 
      
      if (error) {
        console.error("INSERT ERROR:", error.message);
        return;
      }
      
      console.log("SUCCESS:", data);
      if (onSuccess) await onSuccess();
      if (onSuccess) await insertTranzacte();
      onClose(); // close modal after submit
    };
  };

  return (
    <Modal onClose={onClose}>
      <div className="bid-modal-overlay">
        <div className="bid-modal">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>Adaugă Licitație</h2>
          {toLow?<p className="avertizare-pret-mic">Pretul este sub limita! Minim {Number(actualPrice) === 100? 100:Number(actualPrice)+10} lei</p>:<></>}
          <form onSubmit={handleSubmit} className="modal-form">
            <input
              type="number"
              name="amount"
              placeholder={"Pret minim: " + String(Number(actualPrice) === 100? 100:Number(actualPrice)+10)}
              value={amount}
              onChange={handleChange}
              required
            />
            <button type="submit" className="modal-submit">Trimite</button>
          </form>
        </div>
      </div>
    </Modal>
  );
}
