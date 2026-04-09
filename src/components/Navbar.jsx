import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrolledPx = document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (maxScroll > 0) {
        setScrollProgress((scrolledPx / maxScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (mobileNavOpen && !e.target.closest('#mobileNav') && !e.target.closest('#navMenuBtn')) {
        setMobileNavOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [mobileNavOpen]);

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <a href="#hero" className="nav-logo ">JL<span className="nav-logo-dot">.</span></a>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#achievements" className="nav-link">Certifications</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <button 
          className="nav-menu-btn" 
          id="navMenuBtn" 
          aria-label="Menu" 
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <Menu />
        </button>
      </nav>

      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`} id="mobileNav">
        <a href="#about" className="mobile-link" onClick={closeMobileNav}>About</a>
        <a href="#skills" className="mobile-link" onClick={closeMobileNav}>Skills</a>
        <a href="#projects" className="mobile-link" onClick={closeMobileNav}>Projects</a>
        <a href="#experience" className="mobile-link" onClick={closeMobileNav}>Experience</a>
        <a href="#achievements" className="mobile-link" onClick={closeMobileNav}>Certifications</a>
        <a href="#contact" className="mobile-link" onClick={closeMobileNav}>Contact</a>
      </div>

      <aside className="side-dots" aria-label="Section navigation">
        <a href="#hero" className="dot active" data-target="hero" title="Home"></a>
        <a href="#about" className="dot" data-target="about" title="About"></a>
        <a href="#skills" className="dot" data-target="skills" title="Skills"></a>
        <a href="#projects" className="dot" data-target="projects" title="Projects"></a>
        <a href="#experience" className="dot" data-target="experience" title="Experience"></a>
        <a href="#achievements" className="dot" data-target="achievements" title="Certifications"></a>
        <a href="#contact" className="dot" data-target="contact" title="Contact"></a>
      </aside>
    </>
  );
}
