import React from 'react';
import { Smartphone, LayoutDashboard, Database, Wrench } from 'lucide-react';

const SkillCard = ({ icon, title, items }) => (
  <article className="p-8 card-open">
    <div className="skill-header">
      {icon}
      <h3>{title}</h3>
    </div>
    <div className="chips">
      {items.map(item => <span key={item}>{item}</span>)}
    </div>
  </article>
);

export default function Skills() {
  return (
    <section id="skills" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full reveal">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillCard
            icon={<Smartphone size={18} />}
            title="Languages"
            items={['Java', 'Dart', 'Python', 'C/C++', 'SQL', 'HTML/CSS', 'XML']}
          />
          <SkillCard
            icon={<LayoutDashboard size={18} />}
            title="Frameworks"
            items={['Flutter', 'ReactJS', 'Android SDK', 'Spring Boot']}
          />
          <SkillCard
            icon={<Wrench size={18} />}
            title="Tools"
            items={['Git', 'GitHub', 'VS Code', 'Android Studio', 'IntelliJ IDEA', 'Linux', 'Azure']}
          />
          <SkillCard
            icon={<Database size={18} />}
            title="Databases"
            items={['Firebase', 'Supabase', 'MySQL', 'SQLite', 'PostgreSQL']}
          />
        </div>
      </div>
    </section>
  );
}