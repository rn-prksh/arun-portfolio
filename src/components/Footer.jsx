import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowUp, Box, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolioFooter">
      <div className="footerInner">
        <div className="footerTopGrid">
          <div className="footerBrandCol">
            <a href="#home" className="footerLogoLink">
              <div className="footerLogoIcon">
                <Box size={22} aria-hidden="true" />
              </div>
              <div className="footerLogoTexts">
                <span className="footerBrandName">{PORTFOLIO_INFO.name}</span>
                <span className="footerBrandTitle">FULL STACK DEVELOPER</span>
              </div>
            </a>
            <p className="footerTagline">
              Motivated Full Stack Developer specialized in React.js, Python Flask, PHP Laravel, and MySQL. Engineering scalable architectures and clean REST APIs.
            </p>
            <div className="footerPipelineBadge">
              <span className="pipelineDot"></span>
              <span>Stack: React.js • Flask • Laravel • MySQL</span>
            </div>
          </div>

          <div className="footerNavCol">
            <h4 className="footerColTitle">Navigation</h4>
            <ul className="footerLinksList">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Technical Skills</a>
              </li>
              <li>
                <a href="#experience">Internship Experience</a>
              </li>
              <li>
                <a href="#projects">Recent Projects</a>
              </li>
              <li>
                <a href="#contact">Contact & Hire</a>
              </li>
              <li>
                <a href={PORTFOLIO_INFO.resumeUrl} download>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          <div className="footerSocialCol">
            <h4 className="footerColTitle">Connect</h4>
            <div className="footerSocialIcons">
              <a
                href={PORTFOLIO_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <div className="footerStatusNotice">
              <span>Status: </span>
              <strong>{PORTFOLIO_INFO.statusBadge}</strong>
            </div>
          </div>
        </div>

        <div className="footerBottomBar">
          <p className="copyrightText">
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. Designed & Developed with React.js & Vite.
          </p>
          <button
            onClick={scrollToTop}
            className="footerBackToTopBtn"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
