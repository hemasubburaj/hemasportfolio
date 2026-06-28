import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import { Terminal, Code2, Database, Layout, Cloud, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Languages": <Code2 size={20} className="text-[#d4ff00]" />,
  "Frontend & UI": <Layout size={20} className="text-[#d4ff00]" />,
  "Backend Frameworks": <Terminal size={20} className="text-[#d4ff00]" />,
  "Databases": <Database size={20} className="text-[#d4ff00]" />,
  "UI/UX & Design": <Sparkles size={20} className="text-[#d4ff00]" />,
  "Cloud & DevOps": <Cloud size={20} className="text-[#d4ff00]" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/10">
      
      {/* Section Header */}
      <div className="mb-16">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4ff00] mb-3">
          Technical Arsenal // Stack Overview
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white font-display">
          Capabilities
        </h2>
      </div>

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-[#0c0c0c] border border-white/10 hover:border-[#d4ff00]/50 p-8 flex flex-col justify-between group transition-all duration-300 rounded-sm relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white/5 rounded border border-white/10 group-hover:border-[#d4ff00]/30 transition-colors">
                  {CATEGORY_ICONS[cat.title] || <Cpu size={20} className="text-[#d4ff00]" />}
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                  {cat.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-600 group-hover:text-[#d4ff00] transition-colors">
                0{idx + 1}
              </span>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2.5 my-2">
              {cat.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3.5 py-2 bg-white/5 border border-white/5 hover:border-[#d4ff00] hover:bg-[#d4ff00] hover:text-black font-mono text-xs text-gray-200 transition-all rounded-sm cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom accent bar */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <span>Verified Proficiency</span>
              <span className="text-[#d4ff00] opacity-0 group-hover:opacity-100 transition-opacity">● READY</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
