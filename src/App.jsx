import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SpaceBackground from './components/SpaceBackground';

function App() {
  useEffect(() => {
    // Reveal observer logic
    const sections = [...document.querySelectorAll('.chapter')];
    const navDots = [...document.querySelectorAll('.dot')];
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navDots.forEach(d => d.classList.remove('active'));
          const dot = document.querySelector(`.dot[data-target="${entry.target.id}"]`);
          if (dot) dot.classList.add('active');
        }
      });
    }, { threshold: 0.45 });
    
    sections.forEach(s => sectionObserver.observe(s));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('show'); 
      });
    }, { threshold: 0.12 });
    
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 3D Tilt Effect on Cards
    const cards = document.querySelectorAll('.card-lift');
    cards.forEach(card => {
      let shine = card.querySelector('.card-shine');
      if (!shine) {
        shine = document.createElement('div');
        shine.className = 'card-shine';
        card.appendChild(shine);
      }

      const handleMouseMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const cx = r.width / 2;
        const cy = r.height / 2;
        const rotX = ((y - cy) / cy) * -9;
        const rotY = ((x - cx) / cx) * 9;
        card.style.transition = 'transform 0.05s linear';
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.01)`;
        card.style.boxShadow = `0 0 0 1px #ffffff18, 0 30px 60px #00000066, ${rotY * -2}px ${rotX * 2}px 30px #20e3ff1a`;
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.07) 0%, transparent 65%)`;
      };

      const handleMouseLeave = () => {
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        card.style.transform = '';
        card.style.boxShadow = '';
        if (shine) shine.style.background = 'none';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <SpaceBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;