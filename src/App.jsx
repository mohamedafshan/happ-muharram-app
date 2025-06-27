import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const greetingText = "Happy Muharram Mubarak 1447";
const speed = 70;

function App() {
  const [displayed, setDisplayed] = useState("");
  const iRef = useRef(0);

  useEffect(() => {
    function typeWriter() {
      if (iRef.current < greetingText.length) {
        setDisplayed(
          greetingText.slice(0, iRef.current + 1) + '<span class="shimmer"></span>'
        );
        iRef.current++;
        setTimeout(typeWriter, speed);
      } else {
        setDisplayed(greetingText); // Remove shimmer at the end
      }
    }
    typeWriter();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="background-decor">
        <div className="moon"></div>
        <div className="stars"></div>
      </div>
      <div className="lanterns">
        <div className="lantern"></div>
        <div className="lantern"></div>
        <div className="lantern"></div>
        <div className="lantern"></div>
      </div>
      <main className="centered-card">
        <header>
          <div className="crescent"></div>
          <h1
            id="greeting"
            aria-label="Muharram Mubarak"
            dangerouslySetInnerHTML={{ __html: displayed }}
          />
        </header>
        <p className="subtext">
          On this sacred beginning of Muharram 1447, may Allah bless you with peace, faith, and endless barakah.
        </p>
        <div className="divider"></div>
        <section className="quotes">
          <h2>🌙 Reflections for Muharram</h2>
          <div className="quote">“Indeed, Husayn is the lantern of guidance and the ark of salvation.”</div>
          <div className="quote">“Every day is Ashura, and every land is Karbala.”</div>
          <div className="quote">“Do not let your difficulties shake your faith. Muharram teaches patience and endurance.”</div>
        </section>
        <footer>
          <p className="signature">
            With heartfelt wishes,<br />
            <span className="myname">Mohamed Afshan</span>
          </p>
        </footer>
        <div className="musafaha-anim" aria-label="Two Muslims greeting each other">
          {/* Animated SVG: Two Muslim persons greeting (musafaha) */}
          <svg viewBox="0 0 220 90" width="160" height="65" className="musafaha-svg" aria-hidden="true">
            {/* ...existing SVG code... */}
            <g className="person-left">
              <ellipse cx="60" cy="70" rx="22" ry="16" fill="#3b5b7a"/>
              <circle cx="60" cy="48" r="14" fill="#f7e2b7" stroke="#e0b97f" strokeWidth="2"/>
              <ellipse cx="60" cy="41" rx="13" ry="6" fill="#fff" stroke="#b3cde0" strokeWidth="1"/>
              <rect x="60" y="60" width="36" height="10" rx="5" fill="#f7e2b7" className="arm-left"/>
              <rect x="60" y="60" width="18" height="10" rx="5" fill="#3b5b7a"/>
            </g>
            <g className="person-right">
              <ellipse cx="160" cy="70" rx="22" ry="16" fill="#7a4c2f"/>
              <circle cx="160" cy="48" r="14" fill="#f7e2b7" stroke="#c49a6c" strokeWidth="2"/>
              <ellipse cx="160" cy="41" rx="13" ry="6" fill="#fff" stroke="#ffe066" strokeWidth="1"/>
              <rect x="124" y="60" width="36" height="10" rx="5" fill="#f7e2b7" className="arm-right"/>
              <rect x="142" y="60" width="18" height="10" rx="5" fill="#7a4c2f"/>
            </g>
          </svg>
        </div>
      </main>
    </div>
  );
}

export default App;