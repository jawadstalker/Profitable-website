import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/jawadstalker', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jawad-vafaee-586a19363/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:jawadvamps@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-5 h-5 text-primary-500" />
            <span className="font-semibold">DevPortfolio</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-gray-400 text-sm">
            © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
