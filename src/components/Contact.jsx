import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="chapter min-h-screen flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto px-6 py-32 w-full flex flex-col items-center text-center reveal">
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <p className="lead mb-12 mx-auto">
          Open to freelance projects, internships, and full-time roles. Let's build something great together.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-md">
          <a href="tel:+916354531293" className="contact-item">
            <Phone size={18} /><span>+91 63545 31293</span>
          </a>
          <a href="mailto:jenillad573@gmail.com" className="contact-item">
            <Mail size={18} /><span>jenillad573@gmail.com</span>
          </a>
          <a href="https://github.com/ladjenil" target="_blank" rel="noreferrer" className="contact-item">
            <GithubIcon size={18} /><span>github.com/ladjenil</span>
          </a>
          <a href="https://www.linkedin.com/in/jenil-lad-b617442a2/" target="_blank" rel="noreferrer" className="contact-item">
            <LinkedinIcon size={18} /><span>linkedin.com/in/jenil-lad</span>
          </a>
        </div>
        <div className="mt-8">
          <a href="mailto:jenillad573@gmail.com" className="btn-glow">✉️ Hire Me</a>
        </div>
      </div>
    </section>
  );
}
