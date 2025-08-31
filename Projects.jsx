import React from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/projects.css";
import logo from "/assets/logo.jpg";
import frostyLogo from "/assets/Frosty Delight logo.png";
import studentLogo from "/assets/logo copy.jpg";
import novelsLogo from "/assets/novels nest logo.png";
import echoesLogo from "/assets/echoes logo.png";
import brewLogo from "/assets/brew logo.png";

export default function Projects() {
  const { toggleTheme } = useOutletContext();

  const projects = [
    {
      category: "web",
      img: frostyLogo,
      title: "FrostyDelight",
      desc: "A pastel-themed ice cream landing page built using HTML, CSS, and JavaScript.",
      tech: "HTML, CSS, JS",
      link: "https://frostydel.netlify.app/"
    },
    {
      category: "tools",
      img: studentLogo,
      title: "Student Planner",
      desc: "Organize tasks, categories, and events with this responsive planner app.",
      tech: "HTML, CSS, JS",
      link: "https://splanner.netlify.app/"
    },
    {
      category: "ui",
      img: novelsLogo,
      title: "The Novel's Nest",
      desc: "A book discovery platform UI for readers and writers to connect.",
      tech: "Figma, HTML, CSS",
      link: "https://novelsnest.netlify.app/"
    },
    {
      category: "ui",
      img: echoesLogo,
      title: "Echoes of the Forgotten Realm",
      desc: "An immersive design concept for a fantasy game.",
      tech: "Photoshop, Figma",
      link: "https://forgottengame.netlify.app/"
    },
    {
      category: "ui",
      img: brewLogo,
      title: "Brews and Botanica",
      desc: "A place where every sip is a journey through nature.",
      tech: "HTML, CSS",
      link: "https://brewandbotanica.netlify.app/"
    }
  ];

  return (
    <div className="projects-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Yashi Gupta logo" className="logo-img" />
          <span>Yashi Gupta</span>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects" className="active">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
          <button onClick={toggleTheme} id="modeToggle" className="mode-toggle">🌙</button>
        </nav>
      </header>

      <main className="projects-section">
        <section className="projects-header">
          <h1>My Projects</h1>
          <p>Explore the work I've done — from creative front-end designs to useful tools.</p>

          <div className="projects-controls">
            <input type="text" id="searchInput" placeholder="Search projects..." />
            <div className="category-filters">
              <button className="category-btn active" data-category="all">All</button>
              <button className="category-btn" data-category="web">Web</button>
              <button className="category-btn" data-category="ui">UI/UX</button>
              <button className="category-btn" data-category="tools">Tools</button>
            </div>
          </div>
        </section>

        <div className="carousel-container">
          <section className="projects-grid masonry-layout">
            {projects.map((proj, i) => (
              <div className={`project-card flip-card`} data-category={proj.category} key={i}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={proj.img} alt={proj.title} className="project-logo" />
                    <h3>{proj.title}</h3>
                  </div>
                  <div className="flip-card-back">
                    <p className="snippet">{proj.desc}</p>
                    <p className="tech-stack">Tech: {proj.tech}</p>
                    <a href={proj.link} target="_blank" rel="noreferrer" className="btn">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Yashi Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}
