import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const projects = [
  {
    title: 'Portfolio Builder',
    description: 'A responsive landing page creator for students and freelancers to showcase profile and projects.',
    tech: 'React • CSS • JavaScript',
    accent: 'PB',
  },
  {
    title: 'Task Manager App',
    description: 'A clean productivity dashboard with add, complete, and remove task features for daily workflow.',
    tech: 'React • Local Storage • CSS',
    accent: 'TM',
  },
  {
    title: 'Weather Dashboard',
    description: 'A smooth weather interface that displays location-based forecasts in a visually polished layout.',
    tech: 'JavaScript • API • Responsive UI',
    accent: 'WD',
  },
]

function Projects() {
  return (
    <section className="section-block" id="projects">
      <div className="section-heading">
        <p className="section-tag">Featured Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image" aria-hidden="true">
              {project.accent}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-tech">{project.tech}</span>

              <div className="project-actions">
                <a href="#contact" className="btn btn-secondary">
                  <FaGithub /> GitHub
                </a>
                <a href="#home" className="btn btn-primary">
                  <FaArrowUpRightFromSquare /> Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
