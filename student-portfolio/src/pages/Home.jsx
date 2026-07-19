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
          <p className="section-tag">Computer Engineering student • AI learner • builder</p>
          <h1>Shreeja Upadhyay</h1>
          <p className="hero-role">Full Stack Developer & AI/ML Explorer</p>
          <p className="hero-description">
            I build practical, scalable software solutions and keep expanding my
            skills in modern web development, machine learning, and intelligent
            user-centric applications.
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
          <div className="portrait-caption">Building software with AI and full-stack tools</div>
        </div>
      </div>

      <div className="section-block">
        <div className="section-heading">
          <p className="section-tag">About</p>
          <h2>About Me</h2>
        </div>

        <div className="glass-card about-card">
          <p className="about-summary">
            I enjoy developing full-stack applications and applying AI and ML to
            real problems through projects that combine strong engineering,
            thoughtful design, and clean implementation.
          </p>

          <div className="about-grid">
            <div className="info-pill">
              <FaLaptopCode />
              <span>React, Node.js, Python</span>
            </div>
            <div className="info-pill">
              <FaCode />
              <span>AI, ML, NLP, LLMs</span>
            </div>
            <div className="info-pill">
              <FaRocket />
              <span>FastAPI, MySQL, PostgreSQL</span>
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
