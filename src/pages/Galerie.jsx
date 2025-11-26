import React, { useEffect, useState } from "react";
import "./Galerie.css";

function Galerie() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const imgs = importAll(
      require.context("../assets/gallery", false, /\.(png|jpe?g|svg|webp)$/)
    );
    setImages(imgs);
  }, []);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Galerie Photo</h1>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>

          {/* Close button */}
          <button
            className="modal-close"
            onClick={(e) => {
              e.stopPropagation(); // prevent closing when clicking image or button wrapper
              setSelectedImage(null);
            }}
          >
            ✕
          </button>

          <img
            className="modal-image"
            src={selectedImage}
            alt="Full view"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Galerie;
