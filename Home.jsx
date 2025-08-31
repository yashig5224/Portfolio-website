import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/home.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const { toggleTheme } = useOutletContext();

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Yashi Gupta" className="logo-img" />
          <span>Yashi Gupta</span>
        </div>
        <nav className="nav">
          <a href="/" className="active">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
          <button onClick={toggleTheme} id="modeToggle" className="mode-toggle">
            🌙
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="home-section">
        <div className="home-left">
          <h1>
            <Typewriter
              words={[
                'Hi, I am Yashi Gupta',
                'A Computer Engineering Student',
                'A Web Developer',
                'An aspiring Data Scientist'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p>
            A passionate Computer Engineering student and front-end developer who
            loves creating interactive, user-friendly designs.
          </p>
          <div className="buttons">
            <Link to="/projects" className="btn-link">
              View My Work
            </Link>
            <Link to="/contact" className="btn-link">
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/yashig5224" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github.png" alt="GitHub" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/yashi-gupta-790709314/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.png" alt="LinkedIn" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/yashiiii5224?utm_source=qr" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.png" alt="Instagram" /> Instagram
            </a>
          </div>
        </div>

        <div className="home-right">
          <img src="/assets/profile.jpg" alt="Profile" className="profile-pic" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Yashi Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}
