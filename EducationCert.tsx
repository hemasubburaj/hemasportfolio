import React from 'react';
import { EDUCATION, CERTIFICATES } from '../data';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const EducationCert: React.FC = () => {
  return (
    <section id="education" className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Education */}
        <div className="lg:col-span-6">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4ff00] mb-3 flex items-center gap-2">
            <GraduationCap size={16} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mb-12">
            Education
          </h2>

          <div className="flex flex-col gap-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0c0c0c] border border-white/10 p-8 rounded-sm border-l-4 border-l-[#d4ff00] hover:bg-[#121212] transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono px-3 py-1 bg-[#d4ff00]/10 text-[#d4ff00] border border-[#d4ff00]/20 rounded-full flex items-center gap-1.5">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{edu.status}</span>
                </div>

                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg font-serif italic text-gray-400">
                  {edu.institution}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-gray-400">
                  <CheckCircle size={14} className="text-[#d4ff00]" />
                  <span>Major: Computer Science & Engineering</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Competitions */}
        <div className="lg:col-span-6">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4ff00] mb-3 flex items-center gap-2">
            <Award size={16} />
            <span>Credentials & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-display mb-12">
            Certifications
          </h2>

          <div className="flex flex-col gap-6">
            {CERTIFICATES.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 bg-[#0c0c0c] border border-white/10 hover:border-[#d4ff00] transition-all duration-300 group rounded-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#d4ff00] transition-colors">
                    CREDENTIAL // 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-[#d4ff00] transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 text-sm text-gray-400">
                  <span className="font-serif italic">{cert.issuer}</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-600 group-hover:text-white transition-colors">● Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
