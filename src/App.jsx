import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo gradient-text">Khizer Niaz</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1 className="gradient-text">Building AI-Powered Experiences</h1>
        <p>
          CRM Expert • Prompt Engineer • Agentic AI Developer • Automation
          Specialist
        </p>
      </header>

      {/* About Section */}
      <section id="about" className="card">
        <h2>About Me</h2>
        <p>
          I’m Khizer Niaz, a versatile Software Developer, CRM Expert, and
          Prompt Engineer, specializing in AI-driven systems, SaaS platforms,
          and automation workflows. I design solutions that are adaptive,
          scalable, and futuristic.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="card">
        <h2>Skills</h2>
        <div className="skills-list">
          <span className="skill">CRM Development</span>
          <span className="skill">Prompt Engineering</span>
          <span className="skill">Agentic AI</span>
          <span className="skill">n8n Automations</span>
          <span className="skill">SaaS Platforms</span>
          <span className="skill">React.js</span>
          <span className="skill">FastAPI / Flask</span>
          <span className="skill">Custom APIs</span>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="card">
        <h2>Case Studies</h2>

        <div className="case-study">
          <h3>AI-Powered CRM Enhancement</h3>
          <p>
            Built an AI-augmented CRM that automated lead categorization and
            generated personalized emails, improving conversions by 37%.
          </p>
        </div>

        <div className="case-study">
          <h3>Prompt-Engineered Knowledge Assistant</h3>
          <p>
            Designed an intelligent onboarding assistant that reduced customer
            support tickets by 45% while boosting satisfaction.
          </p>
        </div>

        <div className="case-study">
          <h3>Agentic AI Workflow Automation</h3>
          <p>
            Delivered compliance automation with n8n + FastAPI, cutting review
            times by 80% and saving hundreds of hours monthly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="card">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Khizer Niaz • All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
