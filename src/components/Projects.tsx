import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Filter, Sparkles, Radio } from 'lucide-react';
import { motion } from 'motion/react';

// Helper component to render geometric brutalist logo marks for Logo Design projects
const LogoGraphicMark: Record<string, React.ReactNode> = {
  "elara-logo-system": (
    <svg className="w-16 h-16 text-[#d4ff00] group-hover:text-black transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
      <polygon points="50,10 90,85 10,85" />
      <circle cx="50" cy="55" r="15" fill="currentColor" />
    </svg>
  ),
  "zenith-eco-mark": (
    <svg className="w-16 h-16 text-[#d4ff00] group-hover:text-black transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
      <circle cx="35" cy="50" r="25" />
      <circle cx="65" cy="50" r="25" />
    </svg>
  ),
  "aura-ui-system": (
    <svg className="w-16 h-16 text-[#d4ff00] group-hover:text-black transition-colors" viewBox="0 0 100 100" fill="currentColor">
      <rect x="20" y="20" width="25" height="60" rx="12" />
      <circle cx="65" cy="35" r="15" />
      <circle cx="65" cy="65" r="15" />
    </svg>
  ),
  "vortex-monogram": (
    <svg className="w-16 h-16 text-[#d4ff00] group-hover:text-black transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
      <path d="M20 30 L50 70 L80 30" />
      <path d="M20 50 L50 90 L80 50" opacity="0.5" />
    </svg>
  )
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        if (activeFilter === 'live') return p.isLive === true || p.category === 'live';
        if (activeFilter === 'design') return p.category === 'design';
        if (activeFilter === 'web') return p.tech.includes('React.js') || p.tech.includes('Express.js');
        if (activeFilter === 'ai') return p.category === 'ai' || p.tech.includes('Python');
        return true;
      });

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4ff00] mb-3 flex items-center gap-2">
            <Radio size={14} className="animate-pulse" />
            <span>Selected Archives & Deployments // 2025–2026</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display">
            Featured Work
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#111] p-1.5 border border-white/10 rounded-sm">
          <Filter size={14} className="text-gray-500 ml-2 hidden xl:block" />
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded-sm ${
              activeFilter === 'all' ? 'bg-[#d4ff00] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            All ({PROJECTS.length})
          </button>
          <button 
            onClick={() => setActiveFilter('live')}
            className={`px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded-sm flex items-center gap-1.5 ${
              activeFilter === 'live' ? 'bg-[#d4ff00] text-black font-bold' : 'text-gray-300 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping"></span>
            <span>Live Projects</span>
          </button>
          <button 
            onClick={() => setActiveFilter('design')}
            className={`px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded-sm flex items-center gap-1 ${
              activeFilter === 'design' ? 'bg-[#d4ff00] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Sparkles size={12} />
            <span>Logo & UI Designs</span>
          </button>
          <button 
            onClick={() => setActiveFilter('web')}
            className={`px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded-sm ${
              activeFilter === 'web' ? 'bg-[#d4ff00] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Full-Stack Web
          </button>
          <button 
            onClick={() => setActiveFilter('ai')}
            className={`px-3.5 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded-sm ${
              activeFilter === 'ai' ? 'bg-[#d4ff00] text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            AI & IoT
          </button>
        </div>
      </div>

      {/* Projects Grid following Artistic Flair gallery layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 bg-[#0a0a0a]">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            onClick={() => setSelectedProject(project)}
            className="min-h-[340px] sm:min-h-[360px] border-b md:border-b border-r border-white/10 p-8 flex flex-col justify-between group hover:bg-[#d4ff00] hover:text-black transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Top Row: Index number & Category/Live tag */}
            <div className="flex justify-between items-start z-10">
              <span className="text-sm font-mono text-gray-500 group-hover:text-black/80 font-bold transition-colors">
                {project.number}.
              </span>
              <div className="flex items-center gap-2">
                {project.isLive && (
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-[#d4ff00]/20 text-[#d4ff00] border border-[#d4ff00]/30 rounded group-hover:bg-black group-hover:text-[#d4ff00] transition-all flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-currentColor animate-pulse"></span>
                    LIVE
                  </span>
                )}
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-white/5 border border-white/10 rounded group-hover:border-black/30 group-hover:bg-black/10 group-hover:text-black transition-all">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Middle: Logo vector mark for design projects, or Tech preview tags for standard projects */}
            {project.category === 'design' ? (
              <div className="my-6 z-10 flex flex-col items-center justify-center py-4 bg-black/40 group-hover:bg-black/10 border border-white/5 group-hover:border-black/10 rounded-sm transition-all">
                {LogoGraphicMark[project.id] || (
                  <div className="w-12 h-12 rounded-full border-4 border-[#d4ff00] group-hover:border-black flex items-center justify-center font-black font-mono text-lg">
                    {project.title[0]}
                  </div>
                )}
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-black/70 mt-3">Vector Mark System</span>
              </div>
            ) : (
              <div className="my-6 z-10 flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100">
                {project.tech.slice(0, 4).map((t, idx2) => (
                  <span key={idx2} className="text-[10px] font-mono px-2 py-0.5 bg-white/10 group-hover:bg-black/15 group-hover:text-black transition-colors rounded-sm">
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 text-gray-400 group-hover:text-black/70">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            )}

            {/* Bottom: Title & Action icon */}
            <div className="z-10">
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-1 tracking-tight group-hover:translate-x-1 transition-transform">
                {project.title}
              </h3>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 group-hover:border-black/20 transition-colors">
                <p className="text-[11px] font-serif italic text-gray-400 group-hover:text-black font-medium line-clamp-1">
                  {project.subtitle}
                </p>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-black group-hover:text-[#d4ff00] flex items-center justify-center transition-all shrink-0 ml-2">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>

            {/* Subtle background glow effect inside card on hover */}
            <div className="absolute -right-20 -bottom-20 w-48 h-48 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Footer gallery bar "Browse All / Archives" accent block */}
      <div className="mt-8 p-8 border border-white/10 bg-[#111] flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative">
        <div className="absolute top-4 right-4 hidden sm:block">
          <div className="w-3 h-3 bg-[#d4ff00] rounded-full animate-pulse"></div>
        </div>
        <div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">Architecture & Design Standard</span>
          <h4 className="text-xl font-bold uppercase text-white">Full-Stack Deployments & Vector Identity Systems</h4>
          <p className="text-sm text-gray-400 mt-1 max-w-xl font-light">
            Every project emphasizes modular code design, scalable REST APIs, responsive Tailwind layouts, and bespoke vector iconography.
          </p>
        </div>
        <a 
          href="https://github.com/hemasubburaj" 
          target="_blank" 
          rel="noreferrer"
          className="px-6 py-3 border border-[#d4ff00] text-[#d4ff00] font-mono text-xs uppercase tracking-wider hover:bg-[#d4ff00] hover:text-black transition-all flex items-center justify-center gap-2 shrink-0 rounded-sm"
        >
          <span>Visit GitHub Profile</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </section>
  );
};
