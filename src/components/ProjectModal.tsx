import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, Layers, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/20 text-white p-8 sm:p-12 shadow-2xl rounded-sm z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[#d4ff00] text-xl font-bold">PROJECT // {project.number}</span>
              <span className="text-xs font-mono px-3 py-1 bg-white/10 rounded-full text-gray-300 flex items-center gap-1.5">
                <Calendar size={12} className="text-[#d4ff00]" />
                {project.period}
              </span>
            </div>
            
            <button 
              onClick={onClose}
              className="p-2 hover:bg-[#d4ff00] hover:text-black text-gray-400 transition-colors rounded-sm"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3">
              {project.title}
            </h2>
            <p className="text-lg font-serif italic text-[#d4ff00]">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-10 bg-black/50 p-6 border border-white/5 rounded-sm">
            <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
              <Layers size={14} className="text-[#d4ff00]" />
              <span>Technology & Architecture</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="px-3.5 py-1.5 bg-white/10 hover:bg-[#d4ff00] hover:text-black font-mono text-xs uppercase tracking-wider transition-colors rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Engineering Accomplishments */}
          <div className="mb-12">
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#d4ff00] mb-6">
              Engineering Contributions & Key Highlights
            </h3>
            <ul className="flex flex-col gap-5">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-200 leading-relaxed text-base sm:text-lg font-light">
                  <CheckCircle2 size={20} className="text-[#d4ff00] shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-[#d4ff00] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 rounded-sm"
              >
                <span>View Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 border border-white/30 bg-white/5 text-white font-mono text-xs uppercase tracking-wider hover:border-[#d4ff00] hover:text-[#d4ff00] transition-all flex items-center gap-2 rounded-sm"
              >
                <Github size={16} />
                <span>Source Repository</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="ml-auto text-xs font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              Close [ESC]
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
