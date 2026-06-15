const skillGroups = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'React.js']
  },
  {
    title: 'Backend',
    skills: ['Flask', 'PHP', 'Laravel', 'Node.js', 'Express.js']
  },
  {
    title: 'Database',
    skills: ['MySQL']
  },
  {
    title: 'Authentication',
    skills: ['JWT Authentication', 'OAuth 2.0', 'Firebase Authentication']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Bruno']
  },
  {
    title: 'Languages',
    skills: ['Python', 'C', 'Java']
  }
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="sectionTitle">
        <p>Skills</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skillsGrid">
        {skillGroups.map((group) => (
          <div className="skillCard" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skillTags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
