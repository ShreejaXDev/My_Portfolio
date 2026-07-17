function Header({ name, role, themeColor }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <header className="hero-section" id="home">
      <div className="hero-copy">
        <p className="section-tag">Hi, I&apos;m {name}</p>
        <h1>{name}</h1>
        <p className="hero-role">{role}</p>
        <p className="hero-description">
          I build clean, responsive, and user-focused web experiences with a strong
          focus on React, design systems, and modern frontend engineering.
        </p>
      </div>

      <div className="hero-avatar-card">
        <div
          className="avatar-badge"
          style={{ borderColor: themeColor, boxShadow: `0 0 0 8px ${themeColor}22` }}
        >
          {initials}
        </div>
      </div>
    </header>
  )
}

export default Header
