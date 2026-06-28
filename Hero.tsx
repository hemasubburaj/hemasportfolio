import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { ArrowDownRight, Mail, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="min-h-screen pt-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
      
      {/* Top Tag */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6"
      >
        <span className="font-mono text-[#d4ff00] text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
          <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
          <span>01 // Full-Stack & AI Systems Engineer</span>
        </span>
      </motion.div>

      {/* Giant Kinetic Display Title */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative"
      >
        <h1 className="text-[64px] sm:text-[96px] md:text-[130px] lg:text-[156px] leading-[0.82] font-black uppercase tracking-[-0.04em] text-white selection:bg-[#d4ff00] selection:text-black font-display">
          HEMA<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-600">SUBBURAJ</span>
        </h1>
      </motion.div>

      {/* Bio & Location Details Row */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-end border-t border-white/10 pt-10"
      >
        {/* Bio */}
        <div className="md:col-span-6 lg:col-span-6">
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="#work" 
              className="px-6 py-3 bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 rounded-sm"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight size={16} />
            </a>

            <button
              onClick={copyEmail}
              className="px-6 py-3 border border-white/20 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all flex items-center gap-2 rounded-sm group"
            >
              {copied ? <Check size={16} className="text-[#d4ff00]" /> : <Copy size={16} className="text-gray-400 group-hover:text-[#d4ff00]" />}
              <span>{copied ? "Email Copied!" : PERSONAL_INFO.email}</span>
            </button>
          </div>
        </div>

        {/* Location & Quick Specs */}
        <div className="md:col-span-6 lg:col-span-6 flex flex-col sm:flex-row md:justify-end gap-10 sm:gap-16">
          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#d4ff00] mb-2">Currently Based</div>
            <div className="text-2xl font-serif italic text-white">{PERSONAL_INFO.location}</div>
            <div className="text-xs font-mono text-gray-500 mt-1">Open to remote & onsite opportunities</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#d4ff00] mb-2">Academic Hub</div>
            <div className="text-xl font-medium text-white">B.E. CSE (2024–Pres.)</div>
            <div className="text-xs font-mono text-gray-400 mt-1">PSR Engineering College</div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Side Vertical Label (Visible on large screens) */}
      <div className="hidden xl:flex absolute -right-16 top-1/2 -translate-y-1/2 items-center gap-4 rotate-90 origin-center pointer-events-none opacity-40">
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-400 whitespace-nowrap">
          Pushing boundaries in real-time AI & Web
        </span>
        <div className="w-24 h-[1px] bg-gray-600"></div>
      </div>

    </section>
  );
};
