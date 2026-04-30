import { useState } from "react";
import heroImg from "./assets/hero.png";
import ChatWidget from "./ChatWidget";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (mock)");
  };

  return (
    <>
      {/* ABOUT / HERO */}
      <section id="about" className="section">
        <div className="hero-container glass">
          <img src={heroImg} alt="Profile" className="hero-img" />

          <div className="hero-text">
            <h1>Hi, I'm Aiman 👋</h1>
            <p>
              Full-stack developer focused on building clean, modern, and
              scalable web applications.
            </p>

            <a href="#projects" className="btn">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div classname='container'>
          <h2>Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>HR Management System</h3>
              <p>
                Full-stack app with authentication, employee management, and role-based access.
              </p>

              <a
                href="http://localhost:5173/login"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            <div className="project-card">
              <h3>Connect 4 AI Game</h3>
              <p>
                Interactive browser game with bot logic and modern UI design.
              </p>

              <a href="./public/connect4.html" className="btn" target="_blank">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="glass" style={{ padding: "30px" }}>
          <h2>Contact Me</h2>
          <p>Have a question or want to work together?</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Aiman Ahmed</p>
      </footer>

      {/* CHATBOT */}
      <ChatWidget />
    </>
  );
}

export default App;