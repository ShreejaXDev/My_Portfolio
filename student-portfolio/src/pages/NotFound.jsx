import { Link } from 'react-router-dom'
import { FaHouse } from 'react-icons/fa6'

function NotFound() {
  return (
    <section className="page-section fade-in">
      <div className="glass-card not-found-card">
        <div className="not-found-graphic" aria-hidden="true">
          404
        </div>
        <div className="not-found-copy">
          <p className="section-tag">Page missing</p>
          <h1>Page Not Found</h1>
          <p>
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            <FaHouse /> Go Back Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
