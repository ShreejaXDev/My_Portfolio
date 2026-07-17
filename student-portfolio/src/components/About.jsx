import { FaBookOpen, FaBuildingColumns, FaGraduationCap } from 'react-icons/fa6'

function About({ college, branch, semester }) {
  return (
    <section className="section-block" id="about">
      <div className="section-heading">
        <p className="section-tag">About</p>
        <h2>About Me</h2>
      </div>

      <div className="glass-card about-card">
        <p className="about-summary">
          I am a motivated Computer Engineering student with a strong interest in
          frontend development, responsive design, and building practical digital
          products with clean architecture.
        </p>

        <div className="about-grid">
          <div className="info-pill">
            <FaGraduationCap />
            <span>{college}</span>
          </div>
          <div className="info-pill">
            <FaBuildingColumns />
            <span>{branch}</span>
          </div>
          <div className="info-pill">
            <FaBookOpen />
            <span>{semester}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
