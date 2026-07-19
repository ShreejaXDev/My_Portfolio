import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaXmark } from 'react-icons/fa6'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar({ isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
        Shreeja <span>Portfolio</span>
      </NavLink>

      <div className="nav-actions">
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
