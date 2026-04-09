import React, { useEffect, useRef } from 'react';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Parallax effect variables
    const planetA = document.querySelector('.planet-a');
    const planetB = document.querySelector('.planet-b');
    const nebA = document.querySelector('.nebula-a');
    const nebB = document.querySelector('.nebula-b');
    const orb = document.querySelector('.orbit-ring');

    const handleMouseMoveParallax = (e) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * 2;
      const dy = (e.clientY / window.innerHeight - 0.5) * 2;
      if (planetA) planetA.style.transform = `translateY(${dy * -12}px) translateX(${dx * 10}px)`;
      if (planetB) planetB.style.transform = `translateY(${dy * 8}px) translateX(${dx * -8}px)`;
      if (nebA) nebA.style.transform = `translate(${dx * 18}px, ${dy * 12}px)`;
      if (nebB) nebB.style.transform = `translate(${dx * -14}px, ${dy * -10}px)`;
      if (orb) orb.style.transform = `translateX(calc(-50% + ${dx * 6}px)) rotate(${dx * 3}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMoveParallax);

    // Constellation Canvas Logic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const fitCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    fitCanvas();
    window.addEventListener('resize', fitCanvas);

    const MAX_DIST = 130;
    const NUM_DOTS = 65;

    class Dot {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.r = Math.random() * 1.4 + 0.4;
        this.hue = Math.random() > 0.5 ? '32,227,255' : '140,77,255';
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.hue},0.85)`;
        ctx.fill();
      }
    }

    const dots = Array.from({ length: NUM_DOTS }, () => new Dot());
    let consMX = -9999, consMY = -9999;

    const handleMouseMoveCanvas = (e) => {
      consMX = e.clientX;
      consMY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMoveCanvas);

    let animationFrameId;

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        const distM = Math.hypot(d.x - consMX, d.y - consMY);
        if (distM < 160) {
          d.x += (consMX - d.x) * 0.003;
          d.y += (consMY - d.y) * 0.003;
        }
        d.update();
        d.draw(ctx);
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.28;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(32,227,255,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => {
      document.removeEventListener('mousemove', handleMouseMoveParallax);
      document.removeEventListener('mousemove', handleMouseMoveCanvas);
      window.removeEventListener('resize', fitCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="space-bg" aria-hidden="true">
      <div className="stars"></div>
      <div className="nebula nebula-a"></div>
      <div className="nebula nebula-b"></div>
      <div className="planet planet-a"></div>
      <div className="planet planet-b"></div>
      <div className="orbit-ring"></div>
      
      {/* Particles from the original HTML */}
      <div className="particles" id="particles">
        {Array.from({ length: 35 }).map((_, i) => (
          <span 
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <canvas 
        ref={canvasRef} 
        id="constellation" 
        style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }} 
      />
    </div>
  );
}
