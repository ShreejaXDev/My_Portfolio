import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

const projects = [
  {
    title: 'Personalized Fashion Recommendation System',
    description: 'A TensorFlow Recommenders project that suggests fashion items based on user preferences and behavior patterns.',
    tech: 'TensorFlow Recommenders • Python • Machine Learning',
    accent: 'FR',
  },
  {
    title: 'Tesla Stock Price Prediction',
    description: 'A forecasting app that compares multiple machine learning models to predict Tesla stock prices.',
    tech: 'Python • Scikit-learn • Data Analysis',
    accent: 'TS',
  },
  {
    title: 'Reusable Data Preprocessing Pipeline',
    description: 'An automated pipeline for handling missing values, encoding, outlier treatment, and feature preprocessing.',
    tech: 'Python • Data Processing • Scikit-learn',
    accent: 'DP',
  },
  {
    title: 'k-NN and SVM from Scratch',
    description: 'Implementations of k-Nearest Neighbors and Support Vector Machine algorithms without machine learning libraries.',
    tech: 'Python • Algorithms • Machine Learning',
    accent: 'ML',
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
                <a href="https://github.com/ShreejaXDev/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/shreejaupadhyay38/" target="_blank" rel="noreferrer" className="btn btn-primary">
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
