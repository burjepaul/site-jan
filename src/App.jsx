import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Galerie from "./pages/Galerie";
import Licitatie from "./pages/Licitatie";
import { CookieConsentProvider } from "./components/cookie/CookieConsentProvider";
import CookieBanner from "./components/cookie/CookieBanner";


function App() {

  return (
      <CookieConsentProvider>

        <Navbar />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Galerie" element={<Galerie />} />
            <Route path="/Licitatie" element={<Licitatie />} />
          </Routes>
        </div>
        <CookieBanner />

      </CookieConsentProvider>
  );
}

export default App;
