import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default

  // Load saved language on startup
  useEffect(() => {
    const saved = localStorage.getItem("appLanguage");
    if (saved) setLanguage(saved);
  }, []);

  // Save language change
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("appLanguage", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
