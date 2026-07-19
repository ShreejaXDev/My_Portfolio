import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

function Footer({ email, githubUrl, linkedinUrl }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Contact</h3>
          <p>
            <FaEnvelope /> {email}
          </p>
        </div>

        <div>
          <h3>Follow</h3>
          <div className="social-links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2026 Shreeja Upadhyay. All rights reserved.</p>
    </footer>
  )
}

export default Footer
