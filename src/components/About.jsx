import React, { useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, suffix = '', label }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const el = counterRef.current;
        if (el.dataset.counted) return;
        el.dataset.counted = '1';
        const numericTarget = parseInt(target, 10);
        if (isNaN(numericTarget)) return;
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.floor(eased * numericTarget) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.6 });

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [target, suffix]);

  return (
    <div className="stat-card">
      {target === '∞' ? (
        <span className="stat-num">{target}</span>
      ) : (
        <span className="stat-num" ref={counterRef}>0{suffix}</span>
      )}
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full flex flex-col items-center text-center reveal">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="about-grid">
          <p className="about-para">
            Motivated <strong>Web &amp; Mobile Developer</strong> seeking opportunities to build modern, scalable, and user-friendly applications. Passionate about <strong>Flutter, Android</strong>, and full-stack development, with a strong focus on clean architecture, performance optimization, and delivering impactful digital experiences for users and businesses.
          </p>
          <div className="about-stats">
            <AnimatedCounter target="4" suffix="+" label="Projects Shipped" />
            <AnimatedCounter target="2" suffix="" label="Internships" />
            <AnimatedCounter target="5" suffix="+" label="Certifications" />
            <AnimatedCounter target="∞" label="Curiosity" />
          </div>
        </div>
      </div>
    </section>
  );
}
