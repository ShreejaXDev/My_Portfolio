function Skills({ skillList }) {
  return (
    <section className="section-block" id="skills">
      <div className="section-heading">
        <p className="section-tag">Core Stack</p>
        <h2>Skills</h2>
      </div>

      <div className="glass-card">
        <ul className="skill-list">
          {skillList.map((skill) => (
            <li key={skill} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
