import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Hide cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    let mX = -100, mY = -100, rX = -100, rY = -100;
    let animationFrameId;

    const onMouseMove = (e) => {
      mX = e.clientX;
      mY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mX}px, ${mY}px)`;
      }
    };

    const animateCursor = () => {
      rX += (mX - rX) * 0.1;
      rY += (mY - rY) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rX}px, ${rY}px)`;
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateCursor();

    const addHoverEffect = () => {
      if (ringRef.current) ringRef.current.classList.add('hover');
    };
    const removeHoverEffect = () => {
      if (ringRef.current) ringRef.current.classList.remove('hover');
    };

    const interactiveElements = document.querySelectorAll('a, button, .card-lift');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    const observer = new MutationObserver(() => {
      const newInteractiveElements = document.querySelectorAll('a, button, .card-lift');
      newInteractiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
        el.addEventListener('mouseenter', addHoverEffect);
        el.addEventListener('mouseleave', removeHoverEffect);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} id="cursorDot"></div>
      <div className="cursor-ring" ref={ringRef} id="cursorRing"></div>
    </>
  );
}
