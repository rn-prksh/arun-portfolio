import { useState, useEffect } from 'react';
import { Download, Menu, X, Box } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          const sections = ['home', 'freelance', 'about', 'skills', 'experience', 'projects', 'contact'];
          const scrollPos = window.scrollY + 200;

          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbarHeader ${scrolled ? 'scrolled' : ''}`}>
      <div className="navContainer">
        {/* Brand Logo */}
        <a href="#home" className="navLogo" onClick={closeMenu} aria-label="Arun Prakash V Portfolio Home">
          <div className="logoCubeIcon">
            <Box size={20} aria-hidden="true" />
          </div>
          <div className="logoTextGroup">
            <span className="logoName">{PORTFOLIO_INFO.name}</span>
            <span className="logoRole">WEB DEVELOPER • FREELANCE</span>
          </div>
        </a>

        {/* Live Availability Beacon */}
        <a href="#freelance" className="commissionBeacon" title="Available for Freelance Projects">
          <span className="beaconDot" aria-hidden="true"></span>
          <span className="beaconText">Available for Freelance</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktopNav" aria-label="Main Navigation">
          <ul className="navLinks">
            <li>
              <a href="#freelance" className={activeSection === 'freelance' ? 'active' : ''}>
                Freelance
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                Contact
              </a>
            </li>
          </ul>

          <a
            href={PORTFOLIO_INFO.resumeUrl}
            className="navResumeBtn"
            download
            aria-label="Download Arun Prakash V Resume in PDF format"
          >
            <Download size={14} aria-hidden="true" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="mobileToggleBtn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobileDrawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobileNavLinks">
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#freelance" onClick={closeMenu}>Freelance Services</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About Me</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Skills & Stack</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Featured Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact & Hire</a>
          </li>
          <li className="mobileReelItem">
            <a
              href={PORTFOLIO_INFO.resumeUrl}
              download
              onClick={closeMenu}
              className="btn primary fullWidth"
            >
              <Download size={16} aria-hidden="true" />
              <span>Download Resume PDF</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
