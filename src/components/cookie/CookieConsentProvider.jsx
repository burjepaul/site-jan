// /cookie/CookieConsentContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CookieConsentContext = createContext();

export const CookieConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");
    if (saved) setConsent(JSON.parse(saved));
  }, []);

  const accept = () => {
    setConsent(true);
    localStorage.setItem("cookieConsent", true);
  };

  const reject = () => {
    setConsent(false);
    localStorage.setItem("cookieConsent", false);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, accept, reject }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => useContext(CookieConsentContext);
