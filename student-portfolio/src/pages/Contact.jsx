import { useState } from 'react'
import { FaCircleQuestion, FaPaperPlane, FaUser } from 'react-icons/fa6'
import Tooltip from '../components/Tooltip'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showHelp, setShowHelp] = useState(false)

  return (
    <section className="page-section fade-in">
      <div className="section-heading">
        <p className="section-tag">Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-layout">
        <form className="glass-card contact-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Write a brief message..."
              maxLength={240}
            />
            <div className="form-meta">
              <span>{message.length}/240 characters</span>
              <button
                type="button"
                className="help-button"
                onClick={() => setShowHelp((prev) => !prev)}
              >
                <FaCircleQuestion /> Help
              </button>
            </div>
          </div>

          <button type="button" className="btn btn-primary submit-button">
            <FaPaperPlane /> Send Message
          </button>

          <Tooltip open={showHelp} />
        </form>

        <aside className="glass-card live-preview-card">
          <div className="preview-label">
            <FaUser />
            <span>Live Preview</span>
          </div>

          <div className="preview-card">
            <p>
              <strong>Name:</strong> {name || 'Your name will appear here'}
            </p>
            <p>
              <strong>Email:</strong> {email || 'Your email will appear here'}
            </p>
            <p>
              <strong>Message:</strong> {message || 'Your message will appear here'}
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Contact
