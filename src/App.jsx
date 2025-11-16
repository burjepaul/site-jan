import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Galerie from "./pages/Galerie";
import Licitatie from "./pages/Licitatie";

function App() {

  return (
    <div>
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
    </div>
  );
}

export default App;
