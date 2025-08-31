import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/about.css";
import logo from "/assets/logo.jpg"; // Make sure you have this in src/assets

export default function About() {
  const { toggleTheme } = useOutletContext();

  return (
    <div className="about-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Yashi Gupta logo" className="logo-img" />
          <span>Yashi Gupta</span>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about" className="active">About</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
          <button onClick={toggleTheme} id="modeToggle" className="mode-toggle">🌙</button>
        </nav>
      </header>

      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h3>💡 About Me</h3>
            <p>
              I'm a dedicated and detail-oriented <strong>Computer Engineering student</strong> with an
              unwavering enthusiasm for <strong>front-end web development</strong>, <strong>UI/UX design</strong>, and
              innovative digital solutions. My approach to development combines creativity with logic —
              ensuring that every project I work on is both visually appealing and functionally robust.
            </p>

            <h3>🚀 My Web Development Journey</h3>
            <p>
              My journey began with a simple curiosity: <em>"How do websites actually work?"</em> That spark
              quickly evolved into a passion as I learned HTML, CSS, and JavaScript. Over time, I explored
              frameworks like <strong>React.js</strong> and <strong>Tailwind CSS</strong>, and began building projects that challenged my
              problem-solving skills while pushing my creativity. Today, I continue to experiment with
              modern tools and technologies to stay ahead in the ever-changing world of web development.
            </p>

            <h3>🎯 My Passion</h3>
            <p>
              I’m passionate about crafting user interfaces that are <strong>intuitive, engaging, and
                accessible to everyone</strong>. Whether it’s designing smooth animations, building responsive
              layouts, or ensuring top-notch performance, I always aim to create experiences that leave
              a lasting impression.
            </p>

            <h3>🌍 Beyond Coding</h3>
            <p>
              Outside the world of code, I’m an explorer of design trends, tech communities, and creative
              inspiration. I love photography, traveling, and discovering new music — all of which fuel my
              imagination and influence my design style.
            </p>

            <h3>🤝 Let’s Connect!</h3>
            <p>
              I’m always open to collaborating on exciting projects or discussing innovative ideas.
              Whether you’re a fellow developer, a designer, or someone with a vision, let’s bring it to
              life together.
            </p>

            <div className="about-highlights">
              <div className="highlight-box">🎨 UI/UX Enthusiast</div>
              <div className="highlight-box">💻 Front-End Developer</div>
              <div className="highlight-box">📚 Lifelong Learner</div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/yashi-gupta-790709314/" target="_blank" rel="noopener noreferrer" title="LinkedIn"> LinkedIn</a>
              <a href="https://www.instagram.com/yashiiii5224?utm_source=qr" target="_blank" rel="noopener noreferrer" title="Instagram">Instagram</a>
              <a href="https://github.com/yashig5224" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Yashi Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}
