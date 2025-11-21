// /cookie/CookieBanner.jsx
import React from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import "./CookieBanner.css";

export default function CookieBanner() {
  const { consent, accept, reject } = useCookieConsent();

  if (consent !== null) return null; // hide banner if already chosen

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to improve your experience.</p>
      <div className="cookie-buttons">
        <button onClick={accept}>Accept</button>
        <button onClick={reject}>Reject</button>
      </div>
    </div>
  );
}
