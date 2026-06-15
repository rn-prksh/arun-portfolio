import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">Arun<span>.</span></a>

      <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      <div className={open ? 'navLinks active' : 'navLinks'}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
