import React from 'react';
import { GithubIcon } from './Icons';

const projects = [
  {
    badge: 'Flutter · Supabase',
    title: 'QuickSmart',
    subtitle: 'Carpooling & Ride-Sharing App',
    bullets: [
      'Built a full-featured ride-sharing platform with advanced route-based ride matching using a greedy nearest-neighbor algorithm for multi-stop carpooling.',
      'Implemented 100% real-time GPS tracking via WebSocket broadcasting with sub-second latency, fluid marker animations, and automated map-bounds zooming.',
      'Engineered a hardened driver verification pipeline requiring license, vehicle RC, and insurance document uploads via Supabase Storage.',
      'Integrated in-app chat (per-booking channels), push notifications, an admin moderation dashboard, and a standalone vehicle rental marketplace module.',
    ],
    github: 'https://github.com/ladjenil',
  },
  {
    badge: 'Flutter · Spring Boot · React',
    title: 'Daily Dine',
    subtitle: 'Mess Management System — MIT-WPU',
    bullets: [
      'Built an end-to-end mess management platform featuring QR-based meal tracking for streamlined operations.',
      'Designed responsive administrative dashboards and implemented real-time analytics.',
      'Configured secure payment gateways and established robust role-based access controls.',
    ],
    github: 'https://github.com/ladjenil',
  },
  {
    badge: 'Java · Android · Firebase',
    title: 'Hungryfine',
    subtitle: 'Food Delivery App',
    bullets: [
      'Developed comprehensive seller and customer mobile applications with real-time order tracking.',
      'Engineered a scalable backend utilizing Firebase, successfully managing 5,000+ monthly orders.',
      'Integrated Razorpay to facilitate smooth and secure digital transactions.',
    ],
    github: 'https://github.com/ladjenil',
  },
  {
    badge: 'Flutter · Firebase',
    title: 'MitConnect',
    subtitle: 'Social Video Chat App',
    bullets: [
      'Designed a modern UI utilizing an anime-style aesthetic and glassmorphism design principles.',
      'Integrated Firebase modules to simulate real-time chat and video call functionalities.',
    ],
    github: 'https://github.com/ladjenil',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full reveal">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="project-card p-8 card-open">
              <div className="proj-badge">{p.badge}</div>
              <h3>{p.title}</h3>
              <p className="text-sm font-semibold mb-3" style={{ color: 'var(--accent)' }}>{p.subtitle}</p>
              <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed" style={{ color: '#a8b4d8' }}>
                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="proj-links mt-5">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
                  <GithubIcon size={15} /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}