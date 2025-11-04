import React from "react";
import { useEffect, useState } from "react";
import './Galerie.css'

function Galerie() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      // Automatically import all images from your folder
      const importAll = (r) => r.keys().map(r);
      const imgs = importAll(require.context("../assets/gallery", false, /\.(png|jpe?g|svg|webp)$/));
      setImages(imgs);
    }, []);
  
    return (
      <div className="gallery-page">
        <h1 className="gallery-title">Galerie Photo</h1>
  
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="gallery-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
    }
    
export default Galerie;
