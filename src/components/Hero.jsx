import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const roles = [
      'Flutter Developer',
      'Android Developer',
      'React Developer',
      'Mobile App Architect',
      'UI/UX Enthusiast',
      'Full-Stack Builder',
    ];
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId;

    const typeLoop = () => {
      const word = roles[roleIdx];
      setDisplayText(deleting ? word.slice(0, charIdx - 1) : word.slice(0, charIdx + 1));
      
      charIdx += deleting ? -1 : 1;

      let delay = deleting ? 55 : 95;
      if (!deleting && charIdx === word.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 350;
      }
      
      timeoutId = setTimeout(typeLoop, delay);
    };

    timeoutId = setTimeout(typeLoop, 95);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full flex flex-col items-center text-center reveal">
        <div className="avatar-wrap mb-8">
          <div className="avatar" aria-label="Jenil Lad">JL</div>
          <div className="avatar-ring"></div>
        </div>
        <p className="eyebrow mb-3">
          <span>{displayText}</span><span className="cursor-blink">|</span>
        </p>
        <h1 className="title">Hi, I'm <span className="gradient-text">Jenil Lad</span></h1>
        <p className="lead mt-6 mx-auto">
          I build smooth, scalable, and user-centric digital experiences —
          from cross-platform mobile apps to full-stack web solutions.
          Currently focused on Flutter, Android, and real-time backends with Supabase &amp; Firebase.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="btn-glow">🚀 View Projects</a>
          <a href="/Jenil_Lad_CV.pdf" download="Jenil_Lad_CV.pdf" className="btn-ghost flex items-center gap-2">
            <Download size={16} /> Download CV
          </a>
          <a href="https://github.com/ladjenil" target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href="#contact" className="btn-ghost">Let's Connect</a>
        </div>
      </div>
    </section>
  );
}
