import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import './Home.css';
import Button from "../components/Button/Button";
import autc from '../assets/autentic.jpg';
import incoltire from '../assets/incoltire.jpg'
import plante from '../assets/plante.jpg'
import comunitate from '../assets/comunitate.jpg'
import AuthModalManager from "../components/AuthModal/AuthModalManager";



function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return(
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Stejarul lui Avram Iancu</h1>
          <p>Liciteaza pentru ghinzile</p>
          <AuthModalManager />
          <div>
      {user ? (
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h2>Bun venit, {user.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          {/* <Signup />
          <Login /> */}
        </>
      )}
    </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <h2>Ce oferim</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <img src={autc} alt="Expert Guides" />
            <h3>Autenticitate</h3>
            <p>Ghinzi culese din stefarul autentic.</p>
          </div>
          <div className="feature-card">
            <img src={incoltire} className="feature-img" alt="Small Groups" />
            <h3>Incoltite</h3>
            <p>Incoltite cu grija in pamantul stramosesc.</p>
          </div>
          <div className="feature-card">
            <img src={plante} className="feature-img" alt="Flexible Schedule" />
            <h3>Plante sanatoase</h3>
            <p>Plante care au crescut.</p>
          </div>
        </div>
      </section>

      {/* Featured Tour */}
      <section className="featured-tour">
        <div className="tour-image">
          <img src={comunitate} alt="Featured Tour" />
        </div>
        <div className="tour-text">
          <h2>Alaturet comunitatii noastre</h2>
          <p>
            Creazati cont si alaturate comunitatii noastre, apoi incepe licitatia..
          </p>
          <Button
              label="Sign Up"
              type="primary"
              onClick={() => alert("Button clicked!")}
            />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Ce spun membrii nostri</h2>
        <div className="testimonial">
          <p>
          „Când plantez o ghindă, simt că las un semn mic, dar plin de viață, pentru cei care vor veni după mine.”
          </p>
          <h4>– Irina Dobre</h4>
        </div>
        <div className="testimonial">
          <p>
            “În fiecare duminică ne adunăm, râdem, și punem mâna pe pământ. Așa cresc nu doar stejarii, ci și prieteniile dintre noi.”
          </p>
          <h4>– Mihai Roșu</h4>
        </div>
        <div className="testimonial">
          <p>
            “Voluntariatul ne-a învățat că adevărata răbdare nu e să aștepți ca ghinda să încolțească, ci să crezi că fiecare gest bun are rădăcini adânci.”
          </p>
          <h4>– Lavinia Stoenescu</h4>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ghindă cu Ghindă. All rights reserved.</p>
      </footer>
    </main>    
  )
}

export default Home;
