import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';

const highlights = [
  {
    icon: Briefcase,
    title: 'Internship Experience',
    value: '1+ Years',
    desc: 'Hands-on full stack development at DCE Technology',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    value: 'B.Sc. IT Graduate',
    desc: 'VHNSN College, Virudhunagar',
  },
  {
    icon: Code2,
    title: 'Stack Expertise',
    value: 'MERN & Python/PHP',
    desc: 'React.js, Flask, Laravel, and MySQL',
  },
  {
    icon: Award,
    title: 'Ready to Deploy',
    value: 'Immediate Joiner',
    desc: 'Open to Full-time Onsite & Remote roles',
  },
];

function About() {
  return (
    <section id="about" className="section" aria-label="About Arun Prakash V">
      <div className="sectionTitle">
        <p>Profile Overview</p>
        <h2>About Me</h2>
      </div>

      <div className="aboutContainer">
        <div className="aboutCard">
          <p>
            I am a <strong>B.Sc. Information Technology graduate</strong> from VHNSN College,
            Virudhunagar, with over a year of immersive internship experience in full stack web
            development at <strong>DCE Technology</strong>.
          </p>
          <p>
            My engineering expertise spans both frontend and backend domains: creating performant,
            responsive interfaces in <strong>React.js</strong> and engineering robust, secure RESTful
            backends using <strong>Python Flask</strong> and <strong>PHP Laravel</strong> backed by
            optimized <strong>MySQL</strong> databases.
          </p>
          <p>
            I thrive on understanding system requirements, designing relational schemas, implementing
            secure authentication workflows (JWT, OAuth 2.0), and delivering clean, maintainable code.
            I am currently seeking full-time Full Stack or Backend/Frontend Developer opportunities
            where I can bring immediate value to the engineering team.
          </p>
        </div>

        <div className="highlightsGrid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div className="highlightCard" key={item.title}>
                <div className="highlightIcon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="highlightContent">
                  <span className="highlightValue">{item.value}</span>
                  <h3 className="highlightTitle">{item.title}</h3>
                  <p className="highlightDesc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
