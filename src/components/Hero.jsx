import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="heroContent">
        <p className="badge">Available for Full Stack Developer Roles</p>
        <h1>Hi, I am <span>Arun Prakash V</span></h1>
        <h2>Full Stack Developer</h2>

        <p className="heroText">
          Motivated Full Stack Developer with hands-on experience in React.js, Flask,
          Laravel and MySQL. Passionate about building scalable web applications,
          REST APIs and solving real-world problems.
        </p>

        <div className="heroButtons">
          <a href="/resume/Arun_Prakash_bsc_Resume.pdf" className="btn primary" download>
            Download Resume
          </a>
          <a href="#projects" className="btn secondary">View Projects</a>
        </div>

        <div className="socials">
          <a href="https://github.com/rn-prksh" target="_blank" rel="noreferrer">
            <FaGithub size = {28}/>
          </a>
          <a href="https://www.linkedin.com/in/arun-prakash-v" target="_blank" rel="noreferrer">
            <FaLinkedin size = {28}/>
          </a>
        </div>
      </div>

      <div className="heroImage">
       <img src="/images/profile.png" alt="Arun Prakash V" />
      </div>
    </section>
  );
}

export default Hero;