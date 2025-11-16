import React, { useState } from "react";
import { supabase } from "../../supabase";

export default function Signup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password
    });

    if (signupError) {
      setError(signupError.message);
      return;
    }

    // Save additional fields in custom profile table
    await supabase.from("profiles").insert({
      id: data.user.id,
      nickname,
      address,
      phone_number
    });

    alert("Account created!");
    onClose();
  };

  return (
    <div className="auth-modal">
      <form onSubmit={handleSignup}>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone_number}
          onChange={(e) => setphone_number(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
}
