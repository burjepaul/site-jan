import React from "react";
import './Home.css';
import autc from '../assets/autentic.jpg';
import incoltire from '../assets/incoltire.jpg'
import plante from '../assets/plante.jpg'
import comunitate from '../assets/comunitate.jpg'
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext.jsx";
import languages_text from '../const.js'

function Home() {
  const {user, profile}  = useAuth();

  const {language} = useLanguage();
  const text = languages_text[language]

  return(
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{text.homeHeroTitle}</h1>
          <p>{text.homeHeroSubTitle}</p>
          <div>
            {user ? (
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                {profile ?
                  <h2>{text.homeHeroGreeting} {profile.nickname}!</h2>
                  :
                  <></>
                }
              </div>
            ) 
            : 
            (
              <>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>{text.featuresTitle}</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src={autc} alt="Expert Guides" />
            <h3>{text.features1Title}</h3>
            <p>{text.features1Text}</p>
          </div>
          <div className="feature-card">
            <img src={incoltire} className="feature-img" alt="Small Groups" />
            <h3>{text.features2Title}</h3>
            <p>{text.features2Text}</p>
          </div>
          <div className="feature-card">
            <img src={plante} className="feature-img" alt="Flexible Schedule" />
            <h3>{text.features3Title}</h3>
            <p>{text.features3Text}</p>
          </div>
        </div>
      </section>

      {/* Featured Tour */}
      <section className="featured-tour">
        <div className="tour-image">
          <img src={comunitate} alt="Featured Tour" />
        </div>
        <div className="tour-text">
          <h2>{text.tourTitle}</h2>
          <p>
          {text.tourText}
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>{text.testimonialsTitle}</h2>
        <div className="testimonial">
          <p>
            {text.testimonials1Text}
          </p>
          <h4>{text.testimonials1Name}</h4>
        </div>
        <div className="testimonial">
          <p>
          {text.testimonials2Text}
          </p>
          <h4>{text.testimonials2Name}</h4>
        </div>
        <div className="testimonial">
          <p>
          {text.testimonials3Text}
          </p>
          <h4>{text.testimonials3Name}</h4>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} {text.footer}</p>
      </footer>
    </main>    
  )
}

export default Home;
