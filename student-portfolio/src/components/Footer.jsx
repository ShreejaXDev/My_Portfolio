import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa6'

function Footer({ email, phone }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>Contact</h3>
          <p>
            <FaEnvelope /> {email}
          </p>
          <p>
            <FaPhone /> {phone}
          </p>
        </div>

        <div>
          <h3>Follow</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2026 Satvi Akola. All rights reserved.</p>
    </footer>
  )
}

export default Footer
