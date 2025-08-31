import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/skills.css";
import logo from "/assets/logo.jpg"; // Make sure you have this in src/assets

export default function Skills() {
  const { toggleTheme } = useOutletContext();

  return (
    <div className="skills-page">
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

      <section className="skills-section">
        <h1>My Skills & Tools</h1>
        <p>A snapshot of the languages, frameworks, and tools I use.</p>

        <div className="skills-slider">
          {[
            { icon: "fa-solid fa-c", name: "C", width: "100%" },
            { icon: "fa-solid fa-code", name: "C++", width: "100%" },
            { icon: "fa-brands fa-python", name: "Python", width: "100%" },
            { icon: "fa-brands fa-html5", name: "HTML5", width: "100%" },
            { icon: "fa-brands fa-css3", name: "CSS3", width: "100%" },
            { icon: "fa-brands fa-js", name: "JavaScript", width: "100%" },
            { icon: "fa-brands fa-react", name: "React", width: "50%" },
            { icon: "fa-brands fa-git-alt", name: "Git & GitHub", width: "100%" },
            { icon: "fa-brands fa-java", name: "Java", width: "45%" },
          ].map((skill, index) => (
            <div className="skill-box" key={index}>
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
              <div className="progress">
                <div style={{ "--width": skill.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">© 2025 Yashi Gupta. All rights reserved.</footer>
    </div>
  );
}

