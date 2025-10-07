'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--background)] shadow-lg border-b-4 border-[var(--pixel-border)]' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            <span className="text-[#ff6b35]">Tejuice</span>
          </button>

          <div className="hidden md:flex gap-6 items-center">
            {['about', 'experience', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-lg hover:text-[#ff6b35] transition-colors uppercase tracking-wider text-primary"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                {section}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-2xl text-primary"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 flex flex-col gap-3">
          {['about', 'experience', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-lg hover:text-[#ff6b35] transition-colors uppercase text-left"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
