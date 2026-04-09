const fs = require('fs');

// 1. CSS Adjustments
const cssPath = 'd:/Jenil-Lad---Portfolio/src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Dim the animated space background so it stays breathable
css = css.replace(/\.stars \{\n  position: absolute;[\s\S]*?opacity: 0\.5/g, (match) => match.replace('opacity: 0.5', 'opacity: 0.15'));
css = css.replace(/opacity: 0\.32;/g, 'opacity: 0.08;');

// Remove the heavy .glass styles
css = css.replace(/\.glass\s*\{[^}]*\}/g, '');

// Clean up timeline and grids to stack better with flex-col
css = css.replace(/\.timeline\s*\{[^}]*\}/, '.timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  align-items: center;\n}');
css = css.replace(/\.timeline::before\s*\{[^}]*\}/, '.timeline::before { display: none; }');
css = css.replace(/\.timeline-item::before\s*\{[^}]*\}/, '.timeline-item::before { display: none; }');
css = css.replace(/\.timeline-header\s*\{[^}]*\}/, '.timeline-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}');

// Keep buttons dark, just less neon box shadow
css = css.replace(/box-shadow: 0 0 25px #20e3ff70;/, 'box-shadow: none;');
css = css.replace(/box-shadow: 0 0 40px #20e3ffaa;/, 'box-shadow: 0 4px 15px rgba(32, 227, 255, 0.4);');

fs.writeFileSync(cssPath, css);

// 2. JSX Adjustments
const components = [
  'Hero.jsx', 'About.jsx', 'Skills.jsx', 'Projects.jsx', 
  'Experience.jsx', 'Certifications.jsx', 'Contact.jsx'
];

const hoverStyle = "p-6 sm:p-8 hover:bg-white/[0.02] border border-white/0 hover:border-white/10 transition-colors rounded-2xl";

components.forEach(file => {
  let path = \`d:/Jenil-Lad---Portfolio/src/components/\${file}\`;
  if (!fs.existsSync(path)) return;
  
  let jsx = fs.readFileSync(path, 'utf8');

  // Strip arbitrary boxes globally if they exist
  jsx = jsx.replace(/\\bglass\\b/g, '');

  // Consolidate max widths and alignments
  jsx = jsx.replace(/max-w-[456]xl flex flex-col items-center text-center mx-auto/g, 'max-w-4xl flex flex-col items-center text-center mx-auto');
  jsx = jsx.replace(/max-w-[456]xl mx-auto px-6 py-24 w-full reveal/g, 'max-w-4xl flex flex-col items-center text-center mx-auto px-6 py-24 w-full reveal');

  if (file === 'Projects.jsx' || file === 'Skills.jsx' || file === 'Certifications.jsx') {
    // Replace old project card with clean boxless hover
    jsx = jsx.replace(/project-card p-6 sm:p-8 hover:bg-white\\/\\[0\\.02\\] border border-white\\/0 hover:border-white\\/10 transition-colors rounded-2xl/g, 'project-card ' + hoverStyle);
    jsx = jsx.replace(/cert-card p-6 sm:p-8 hover:bg-white\\/\\[0\\.02\\] border border-white\\/0 hover:border-white\\/10 transition-colors rounded-2xl/g, 'cert-card ' + hoverStyle);
    jsx = jsx.replace(/cert-card glass p-6 card-lift/g, 'cert-card ' + hoverStyle);
    jsx = jsx.replace(/p-6 card-lift project-card/g, hoverStyle + ' project-card');
    
    // Grid columns adjustment
    jsx = jsx.replace(/sm:grid-cols-2 lg:grid-cols-2/g, 'md:grid-cols-2');
  }

  if (file === 'Experience.jsx') {
    jsx = jsx.replace(/timeline-item text-left p-6 sm:p-8 hover:bg-white\\/\\[0\\.02\\] border border-white\\/0 hover:border-white\\/10 transition-colors rounded-2xl/g, 'timeline-item text-center ' + hoverStyle);
    jsx = jsx.replace(/timeline-item text-left/g, 'timeline-item text-center');
  }

  fs.writeFileSync(path, jsx);
});

console.log('Done mapping to clean dark minimal');
