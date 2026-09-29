import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
      <div className="navbarContainer">
        <a href="#home" className="logo" aria-label="Arun Prakash V Home">
          Arun<span className="logoDot">.</span>
        </a>

        <nav className="desktopNav" aria-label="Main Navigation">
          <ul className="navLinks">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`navLink ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="navActions">
          <a
            href="/resume/Arun_Prakash_bsc_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navResumeBtn"
            aria-label="View Resume PDF"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>

          <button
            className="menuBtn"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-nav"
        className={`mobileNav ${open ? 'mobileNavOpen' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobileNavOverlay" onClick={() => setOpen(false)} />
        <div className="mobileNavContent">
          <div className="mobileNavHeader">
            <span className="logo">Arun<span className="logoDot">.</span></span>
            <button
              className="mobileCloseBtn"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="mobileNavLinks">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`mobileNavLink ${isActive ? 'active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobileNavFooter">
            <a
              href="/resume/Arun_Prakash_bsc_Resume.pdf"
              download
              className="btn primary fullWidth"
              onClick={() => setOpen(false)}
            >
              <FileText size={18} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
