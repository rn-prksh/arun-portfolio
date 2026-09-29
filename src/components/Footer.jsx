import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footerContainer">
        <div className="footerTop">
          <div className="footerBrand">
            <a href="#home" className="logo">
              Arun<span className="logoDot">.</span>
            </a>
            <p className="footerTagline">
              Full Stack Developer building clean, high-performance web applications and REST APIs.
            </p>
          </div>

          <nav className="footerNav" aria-label="Footer Navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footerActions">
            <div className="footerSocials">
              <a
                href="https://github.com/rn-prksh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-prakash-v"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="backToTopBtn"
              aria-label="Scroll back to top of the page"
              title="Back to top"
            >
              <ArrowUp size={18} aria-hidden="true" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="footerBottom">
          <p>© {new Date().getFullYear()} Arun Prakash V. All rights reserved.</p>
          <p className="footerTech">Crafted with React, Vite & Modern Web Standards</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
