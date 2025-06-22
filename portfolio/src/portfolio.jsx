import { motion } from 'framer-motion';
import { useState } from 'react';
import './portfolio.css';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Sahil Hode</h1>
        <div className="menu-icon">
          <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button">
            <svg className="menu-svg" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="menu-list">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {menuOpen && (
        <ul className="mobile-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="hero-section"
      >
        <h2 className="hero-title">Hi, I'm <span className="highlight">Sahil Hode</span></h2>
        <p className="hero-subtitle">I'm a Web Developer | Python Programmer | Backend Developer</p>
        <a href="#projects" className="hero-button">View My Work</a>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="section-title">About Me</h3>
        <p className="section-text">
        Motivated Computer Applications student with experience in web development, Python programming, and Django. Eager to contribute technical skills and grow in a dynamic development environment through internship or job opportunities.
        </p>
        <div className="contact-info">
          <p><strong>Address:</strong> Marleshwar Apt., Near Swapnasakar Bunglow, Diva (E), Thane, Maharashtra</p>
          <p><strong>Phone:</strong> 8652601566</p>
          <p><strong>Email:</strong> sahilhode67@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sahil-hode-884355253" className="link">linkedin.com/in/sahil-hode-884355253</a></p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="skills-section"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="section-title">Technical Skills</h3>
        <div className="skills-grid">
          {["HTML", "CSS", "JavaScript", "Python", "Django", "C", "SQL", "MySQL", "Git", "GitHub", "MS Excel", "MS Word", "Team Collaboration"].map(skill => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="skill-card"
              key={skill}
            >{skill}</motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="section-title">Projects</h3>
        <div className="projects-grid">
          {[
            { title: "To-Do List Web App", desc: "Task management app using HTML, CSS, JavaScript, Django, and MySQL." },
            { title: "Online Quiz System", desc: "Quiz platform with level selection and game-over logic using HTML, CSS, and JavaScript." },
            { title: "AI-Based Resume Builder", desc: "Real-time AI resume suggestions with TensorFlow/Hugging Face, Django, and PDF export." },
            { title: "Password Generator", desc: "Python CLI password generator using random and string libraries." },
            { title: "Student Report Card Management", desc: "Student record system in Python using JSON backend." },
            { title: "AI Personalized Medication Reminder", desc: "Reminder system with chatbot and image recognition using Django, MySQL." },
            { title: "AI Chatbot", desc: "Customer support chatbot using HTML, CSS, JavaScript, Python, Django, and MySQL." }
          ].map((project, index) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={index}
              className="project-card"
            >
              <h4 className="project-title">{project.title}</h4>
              <p className="project-desc">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="contact-section"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="section-title">Contact Me</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <textarea rows="5" placeholder="Message" className="form-textarea"></textarea>
          <button className="form-button">Send Message</button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sahil Hode. All rights reserved.</p>
        <div className="footer-info">
          <div><strong>Languages:</strong> English, Hindi</div>
          <div><strong>Certifications:</strong> Python Programming (GeeksforGeeks), 3–4 Hackathons, 2nd Prize - Quiz Game (Sahyog College)</div>
        </div>
      </footer>
    </div>
  );
}
