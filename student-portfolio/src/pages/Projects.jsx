import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const projects = [
  {
    title: 'Portfolio Builder',
    description:
      'A responsive portfolio generator for students and professionals to present their profile and work efficiently.',
    tech: 'React • CSS • JavaScript',
    badge: 'PB',
  },
  {
    title: 'Task Manager',
    description:
      'A productivity dashboard with clear task tracking, interactions, and a clean, minimal workflow.',
    tech: 'React • State Hooks • UI Design',
    badge: 'TM',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A polished weather app experience that emphasizes readability, smooth interaction, and modular UI.',
    tech: 'JavaScript • API • Responsive Design',
    badge: 'WD',
  },
]

function Projects() {
  return (
    <section className="page-section fade-in">
      <div className="section-heading">
        <p className="section-tag">Featured Work</p>
        <h2>Selected Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image" aria-hidden="true">
              {project.badge}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-tech">{project.tech}</span>

              <div className="project-actions">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <FaGithub /> GitHub
                </a>
                <a href="https://example.com" target="_blank" rel="noreferrer" className="btn btn-primary">
                  <FaArrowUpRightFromSquare /> Live Demo
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
