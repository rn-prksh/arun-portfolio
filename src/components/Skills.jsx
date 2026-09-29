import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Terminal,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design', 'Vite'],
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    skills: ['Python (Flask)', 'PHP (Laravel)', 'Node.js', 'Express.js', 'REST APIs', 'MVC Architecture'],
  },
  {
    title: 'Database & Storage',
    icon: Database,
    skills: ['MySQL', 'Relational Schema Design', 'Query Optimization', 'CRUD Operations'],
  },
  {
    title: 'Auth & Security',
    icon: ShieldCheck,
    skills: ['JWT Authentication', 'OAuth 2.0 (Google, Zoho)', 'Firebase Auth', 'Role-Based Access Control'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'Bruno API Client', 'VS Code', 'npm / Vite'],
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: ['Python', 'JavaScript', 'PHP', 'C', 'Java', 'SQL'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="sectionTitle">
        <p>Technical Expertise</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skillsGrid">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div className="skillCard" key={group.title}>
              <div className="skillCardHeader">
                <div className="skillIconWrap" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3>{group.title}</h3>
              </div>
              <div className="skillTags">
                {group.skills.map((skill) => (
                  <span className="skillTag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
