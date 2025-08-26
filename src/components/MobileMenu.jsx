import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="mobile-menu-wrapper">
      {/* ENDA knappen – samma plats alltid */}
      <button
        type="button"
        className={`hamburger ${open ? 'is-open' : ''}`}
        aria-label={open ? 'Stäng meny' : 'Öppna meny'}
        aria-controls="mobile-drawer"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div
          className="mobile-overlay"
          role="presentation"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        id="mobile-drawer"
        className={`mobile-drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        onClick={(e) => e.stopPropagation()}
      >
            <ul className="mobile-drawer-list">
                  <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
                  <li><Link to="/ResumePage" onClick={() => setOpen(false)}>Resume</Link></li>
                  <li><Link to="/ProjectsPage" onClick={() => setOpen(false)}>Projects</Link></li>
                  <li><Link to="/ContactPage" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
