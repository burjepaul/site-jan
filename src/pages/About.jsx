import React from "react";
import "./About.css";


function About() {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Despre noi</h1>
          <p className="hero-subtitle">
            Ghindele din Stejarul lui Avram Iancu — puterea tinereții și a voluntariatului românesc.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="text-block">
          <h2>Cine suntem</h2>
          <p>
            Suntem <strong>Ghindele din Stejarul lui Avram Iancu</strong>, o comunitate de tineri
            voluntari care duc mai departe spiritul neînfricat și altruist al lui Avram Iancu.
            Asemenea ghindelor ce cresc dintr-un stejar puternic, și noi credem în puterea
            rădăcinilor, în unitate și în dorința de a face bine.
          </p>
        </div>

        <div className="text-block">
          <h2>Misiunea noastră</h2>
          <p>
            Prin acțiunile noastre de <strong>voluntariat</strong>, educație și implicare civică,
            ne propunem să cultivăm valori precum <em>respectul, solidaritatea, curajul</em> și
            <em>dragostea de neam</em>. Credem că fiecare tânăr poate fi o ghindă care va crește
            într-un nou stejar al binelui.
          </p>
        </div>

        <div className="text-block">
          <h2>Ce facem</h2>
          <p>
            Organizăm evenimente comunitare, ateliere educaționale, campanii de mediu și activități
            de voluntariat dedicate celor care au nevoie. Dincolo de fapte, dorim să inspirăm —
            pentru că <strong>adevărata schimbare începe în inimă</strong>.
          </p>
        </div>

        <div className="quote-block">
          <blockquote>
            „Un popor care nu-și cunoaște istoria e ca un copil care nu-și cunoaște părinții.”  
            <span>— Avram Iancu</span>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default About;
