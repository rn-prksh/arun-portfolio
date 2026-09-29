import { useState, useEffect } from 'react';
import { Play, Sparkles, Menu, X, Box } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

function Navbar({ onOpenShowreel }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'projects', 'about', 'hardware', 'resources', 'contact'];
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbarHeader ${scrolled ? 'scrolled' : ''}`}>
      <div className="navContainer">
        <a href="#home" className="navLogo" onClick={closeMenu} aria-label="Arun Prakash V 3D Portfolio">
          <div className="logoCubeIcon">
            <Box size={20} aria-hidden="true" />
          </div>
          <div className="logoTextGroup">
            <span className="logoName">{PORTFOLIO_INFO.name}</span>
            <span className="logoRole">3D & CGI ARTIST</span>
          </div>
        </a>

        <div className="commissionBeacon" title={PORTFOLIO_INFO.commissionStatus}>
          <span className="beaconDot" aria-hidden="true"></span>
          <span className="beaconText">Commissions Open</span>
        </div>

        <nav className="desktopNav" aria-label="Main Navigation">
          <ul className="navLinks">
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#hardware"
                className={activeSection === 'hardware' ? 'active' : ''}
              >
                Hardware Specs
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className={activeSection === 'resources' ? 'active' : ''}
              >
                Free Assets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            onClick={onOpenShowreel}
            className="navReelBtn"
            title="Watch 2026 3D Showreel"
          >
            <Play size={14} fill="currentColor" aria-hidden="true" />
            <span>Showreel</span>
          </button>
        </nav>

        <button
          className="mobileToggleBtn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobileDrawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobileNavLinks">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Featured Work
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About & Pipeline
            </a>
          </li>
          <li>
            <a href="#hardware" onClick={closeMenu}>
              Hardware Specs
            </a>
          </li>
          <li>
            <a href="#resources" onClick={closeMenu}>
              Free 3D Assets & Tutorials
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Commission Inquiry
            </a>
          </li>
          <li className="mobileReelItem">
            <button
              onClick={() => {
                closeMenu();
                onOpenShowreel();
              }}
              className="btn primary fullWidth"
            >
              <Play size={16} fill="currentColor" />
              <span>Watch 2026 Showreel</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
