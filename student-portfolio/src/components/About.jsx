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
          Hi, I am Shreeja Upadhyay, a Computer Engineering student passionate
          about building practical software solutions with React, Node.js,
          Python, FastAPI, MySQL, and PostgreSQL while exploring AI, machine
          learning, NLP, and large language models.
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
