import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./LanguageSwitcher.css";


const flags = {
    en: "en.png",
    ro: "ro.png",
    de: "de.png",
  };
  
  export default function LanguageSwitcher() {
    const { language, changeLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
  
    return (
      <div className="lang-dropdown">
        {/* Selected Language Button */}
        <button className="lang-selected" onClick={() => setOpen(!open)}>
          <img src={flags[language]} alt={language} className="lang-flag" />
        </button>
  
        {/* Dropdown menu */}
        {open && (
          <div className="lang-menu">
            <button onClick={() => { changeLanguage("en"); setOpen(false); }}>
              <img src={flags.en} alt="English" /> English
            </button>
  
            <button onClick={() => { changeLanguage("ro"); setOpen(false); }}>
              <img src={flags.ro} alt="Romanian" /> Română
            </button>
  
            <button onClick={() => { changeLanguage("de"); setOpen(false); }}>
              <img src={flags.de} alt="German" /> Deutsch
            </button>
          </div>
        )}
      </div>
    );
  }