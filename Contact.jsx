import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/contact.css";
import logo from "/assets/logo.jpg"; // ensure correct path

export default function Contact() {
  const { toggleTheme } = useOutletContext();

  return (
    <div className="contact-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Yashi Gupta logo" className="logo-img" />
          <span>Yashi Gupta</span>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact" className="active">Contact</a>
          <button onClick={toggleTheme} id="modeToggle" className="mode-toggle">🌙</button>
        </nav>
      </header>

      <section className="contact-section">
        <h1>Let's Connect</h1>
        <p>Have a project idea, collaboration, or just want to say hello? Drop me a message!</p>

        <form className="contact-form" action="#" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        © 2025 Yashi Gupta. All rights reserved.
      </footer>
    </div>
  );
}
