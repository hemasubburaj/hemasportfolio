import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, ExternalLink, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-5' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Monospace Portfolio Index Label */}
        <a href="#" className="text-xs font-mono uppercase tracking-[0.3em] flex items-center gap-3 md:gap-4 text-gray-300 hover:text-[#d4ff00] transition-colors group">
          <span className="w-6 md:w-8 h-[1px] bg-white group-hover:bg-[#d4ff00] group-hover:w-12 transition-all"></span>
          <span>{PERSONAL_INFO.shortName} <span className="text-[#d4ff00]">/</span> Index 2026</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase font-bold tracking-[0.2em]">
          <a href="#work" className="hover:text-[#d4ff00] transition-colors">Work</a>
          <a href="#skills" className="hover:text-[#d4ff00] transition-colors">Skills</a>
          <a href="#education" className="hover:text-[#d4ff00] transition-colors">Background</a>
          <a href="#contact" className="hover:text-[#d4ff00] transition-colors font-mono flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:border-[#d4ff00] hover:bg-[#d4ff00]/10">
            <span>Contact</span>
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-pulse"></span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-[#d4ff00] p-2 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c0c] border-b border-white/10 px-6 py-8 flex flex-col gap-6 text-sm uppercase font-bold tracking-[0.2em] shadow-2xl animate-in slide-in-from-top duration-200">
          <a 
            href="#work" 
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#d4ff00] transition-colors py-2 border-b border-white/5"
          >
            01 // Work
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#d4ff00] transition-colors py-2 border-b border-white/5"
          >
            02 // Skills
          </a>
          <a 
            href="#education" 
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#d4ff00] transition-colors py-2 border-b border-white/5"
          >
            03 // Background
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#d4ff00] font-mono flex items-center justify-between py-2"
          >
            <span>04 // Get In Touch</span>
            <span className="w-2 h-2 rounded-full bg-[#d4ff00]"></span>
          </a>
          
          <div className="pt-4 flex flex-col gap-2 text-xs font-mono text-gray-400 normal-case tracking-normal">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#d4ff00]" />
              <span>{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#d4ff00]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
