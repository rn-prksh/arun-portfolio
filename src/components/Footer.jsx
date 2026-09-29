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
            <a href="#home" className="footerLogoLink" aria-label="Arun Prakash V Home">
              <div className="footerLogoIcon">
                <Box size={22} aria-hidden="true" />
              </div>
              <div className="footerLogoTexts">
                <span className="footerBrandName">{PORTFOLIO_INFO.name}</span>
                <span className="footerBrandTitle">WEB DEVELOPER • FULL STACK</span>
              </div>
            </a>
            <p className="footerTagline">
              Web Developer at WARX Digital Pvt Ltd specializing in CodeIgniter 3, React.js, MySQL, and AI Agent workflows. Available for high-impact freelance web projects.
            </p>
            <div className="footerPipelineBadge">
              <span className="pipelineDot"></span>
              <span>WARX Digital • ERP, E-Commerce & AI</span>
            </div>
          </div>

          <div className="footerNavCol">
            <h4 className="footerColTitle">Navigation</h4>
            <ul className="footerLinksList">
              <li>
                <a href="#freelance">Freelance Services</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#skills">Technical Skills</a>
              </li>
              <li>
                <a href="#experience">Work Experience</a>
              </li>
              <li>
                <a href="#projects">Recent Projects</a>
              </li>
              <li>
                <a href="#contact">Contact & Hire</a>
              </li>
              <li>
                <a href={PORTFOLIO_INFO.resumeUrl} download>
                  Download Resume PDF
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
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. Engineering Web Solutions with React.js & Vite.
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
