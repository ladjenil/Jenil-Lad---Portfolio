import React from 'react';
import { Award } from 'lucide-react';

const certs = [
  'React Native – Meta',
  'Android App Development (7 Real-World Java Projects)',
  'Java for Programmers Crash Course',
  'Mobile App UI Design – Moqups',
  'Git for Beginners',
];

export default function Certifications() {
  return (
    <section id="certifications" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full reveal">
        <h2 className="section-title">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((c) => (
            <article key={c} className="cert-card p-7">
              <div className="cert-icon">
                <Award size={20} />
              </div>
              <div className="cert-body">
                <h3>{c}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}