import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaUserTie,
} from 'react-icons/fa6'

const skills = [
  'React 18',
  'JavaScript',
  'React Router',
  'CSS3',
  'Responsive UI',
  'Git',
  'Node.js',
  'Figma Thinking',
]

function Home() {
  return (
    <section className="page-section fade-in">
      <div className="hero-card glass-card">
        <div className="hero-copy">
          <p className="section-tag">Software engineer • designer • problem solver</p>
          <h1>Satvi Akola</h1>
          <p className="hero-role">Frontend Developer & UI Enthusiast</p>
          <p className="hero-description">
            I craft polished, high-performing web experiences with a balance of
            strong engineering fundamentals and design-aware UI thinking.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              <FaRocket /> View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <FaArrowRight /> Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-avatar-card">
          <div className="hero-portrait">
            <FaUserTie />
          </div>
          <div className="portrait-caption">Professional image placeholder</div>
        </div>
      </div>

      <div className="section-block">
        <div className="section-heading">
          <p className="section-tag">About</p>
          <h2>About Me</h2>
        </div>

        <div className="glass-card about-card">
          <p className="about-summary">
            A Computer Engineering student focused on building accessible,
            scalable, and modern interfaces with React, routing, and state-rich
            user flows.
          </p>

          <div className="about-grid">
            <div className="info-pill">
              <FaLaptopCode />
              <span>Computer Engineering</span>
            </div>
            <div className="info-pill">
              <FaCode />
              <span>Semester 5</span>
            </div>
            <div className="info-pill">
              <FaRocket />
              <span>Design + Development</span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-block">
        <div className="section-heading">
          <p className="section-tag">Core Stack</p>
          <h2>Skills</h2>
        </div>

        <div className="glass-card">
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
