import React from 'react';

const timelineItems = [
  {
    role: 'Android Developer Intern',
    company: 'BrainyBeam Technologies Pvt. Ltd.',
    date: 'Jan 2026 – Present',
    bullets: [
      'Developing and maintaining native Android applications in a remote environment, focusing on clean, efficient, and scalable code.',
      'Collaborating with the development team to design intuitive UIs, integrate backend APIs, and enhance overall app functionality.',
      'Troubleshooting bugs, optimizing app performance, and participating in daily development workflows across various Android devices.',
    ],
    chips: ['Android', 'Java', 'Kotlin', 'REST APIs'],
  },
  {
    role: 'Flutter Developer – GAIA Project',
    company: 'MIT-WPU',
    date: 'Jul 2025 – Dec 2025',
    bullets: [
      'Built and launched an official university management app on the App Store and Google Play using Flutter.',
      'Handled end-to-end mobile development including responsive UI design, REST API integration, and cross-device performance optimization.',
      'Streamlined campus operations by replacing manual paperwork with a centralized digital platform for real-time progress tracking.',
    ],
    chips: ['Flutter', 'Dart', 'REST API', 'iOS', 'Android'],
  },
];

const educationItems = [
  {
    role: 'Master of Computer Applications',
    company: 'MIT World Peace University, Pune',
    date: 'Expected Jul 2026',
    note: 'CGPA: 6.70 / 10.00',
  },
  {
    role: 'Bachelor of Computer Applications',
    company: 'Veer Narmad South Gujarat University',
    date: 'Oct 2021 – Mar 2024',
    note: 'CGPA: 7.33 / 10.00',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full reveal">

        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div key={item.role} className="timeline-item p-8">
              <div className="timeline-header mb-5">
                <div>
                  <span className="exp-role">{item.role}</span>
                  <span className="exp-company">{item.company}</span>
                </div>
                <span className="exp-date">{item.date}</span>
              </div>
              <ul className="list-disc pl-4 space-y-2 text-sm leading-relaxed" style={{ color: '#a8b4d8' }}>
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="chips mt-4">
                {item.chips.map(c => <span key={c}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title mt-24">Education</h2>
        <div className="timeline">
          {educationItems.map((item) => (
            <div key={item.role} className="timeline-item p-8">
              <div className="timeline-header">
                <div>
                  <span className="exp-role">{item.role}</span>
                  <span className="exp-company">{item.company}</span>
                </div>
                <span className="exp-date">{item.date}</span>
              </div>
              {item.note && <p className="text-sm mt-3" style={{ color: '#7080a8' }}>{item.note}</p>}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}