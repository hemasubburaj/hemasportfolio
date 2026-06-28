import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <footer id="contact" className="pt-24 pb-12 max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/10">
      
      {/* Giant Invitation Banner */}
      <div className="mb-20">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4ff00] mb-4">
          04 // Initiate Connection
        </div>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[104px] font-black uppercase tracking-[-0.03em] leading-[0.88] text-white font-display">
          LET'S BUILD<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] via-white to-gray-500">TOGETHER.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/10">
        
        {/* Contact Specs & Direct Triggers */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-8 max-w-md">
              Whether you have an exciting AI research challenge, full-stack web project, or internship inquiry, my inbox is always open.
            </p>

            <div className="flex flex-col gap-4 font-mono text-sm">
              {/* Email Button */}
              <div className="p-4 bg-[#0c0c0c] border border-white/10 hover:border-[#d4ff00] transition-colors rounded-sm flex items-center justify-between group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail size={18} className="text-[#d4ff00] shrink-0" />
                  <span className="truncate text-gray-200">{PERSONAL_INFO.email}</span>
                </div>
                <button 
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="px-3 py-1 bg-white/5 hover:bg-[#d4ff00] hover:text-black text-xs uppercase tracking-wider transition-all rounded flex items-center gap-1.5 shrink-0 ml-2"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Button */}
              <div className="p-4 bg-[#0c0c0c] border border-white/10 hover:border-[#d4ff00] transition-colors rounded-sm flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#d4ff00] shrink-0" />
                  <span className="text-gray-200">{PERSONAL_INFO.phone}</span>
                </div>
                <button 
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="px-3 py-1 bg-white/5 hover:bg-[#d4ff00] hover:text-black text-xs uppercase tracking-wider transition-all rounded flex items-center gap-1.5 shrink-0"
                >
                  {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Location Badge */}
              <div className="p-4 bg-[#0c0c0c] border border-white/10 rounded-sm flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-[#d4ff00] shrink-0" />
                <span>{PERSONAL_INFO.location}, {PERSONAL_INFO.country}</span>
              </div>
            </div>
          </div>

          {/* Availability badge */}
          <div className="p-6 bg-[#d4ff00]/5 border border-[#d4ff00]/20 rounded-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4ff00] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff00] animate-ping"></span>
              <span>Status // Available</span>
            </div>
            <p className="text-sm font-serif italic text-gray-300">
              Seeking Software Engineering Roles & Collabs for 2026/2027.
            </p>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-[#0c0c0c] border border-white/10 p-8 sm:p-12 rounded-sm relative">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 text-center flex flex-col items-center justify-center h-full"
            >
              <div className="w-16 h-16 bg-[#d4ff00] text-black rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">Message Received!</h3>
              <p className="text-gray-400 max-w-md mx-auto font-light mb-8">
                Thank you for reaching out, {formState.name || 'there'}. I will review your note and respond to your email shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 border border-white/20 text-xs font-mono uppercase tracking-widest hover:border-[#d4ff00] hover:text-[#d4ff00] transition-colors rounded"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2">
                Drop a direct note
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-gray-400">Your Name *</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    placeholder="Jane Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="bg-black border border-white/15 focus:border-[#d4ff00] outline-none text-white px-4 py-3.5 text-sm font-sans transition-colors rounded-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-gray-400">Email Address *</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    placeholder="jane@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="bg-black border border-white/15 focus:border-[#d4ff00] outline-none text-white px-4 py-3.5 text-sm font-sans transition-colors rounded-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-gray-400">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  placeholder="Project Collab / Opportunity"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  className="bg-black border border-white/15 focus:border-[#d4ff00] outline-none text-white px-4 py-3.5 text-sm font-sans transition-colors rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-gray-400">Message *</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about what you're working on..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-black border border-white/15 focus:border-[#d4ff00] outline-none text-white p-4 text-sm font-sans transition-colors rounded-sm resize-y"
                />
              </div>

              <button 
                type="submit"
                className="mt-2 w-full py-4 bg-[#d4ff00] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 rounded-sm cursor-pointer shadow-lg hover:shadow-[#d4ff00]/20"
              >
                <span>Transmit Message</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Bottom Index Copyright & Credit Bar */}
      <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span>© 2026 {PERSONAL_INFO.name}</span>
          <span>●</span>
          <span>Sivakasi, TN</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#" className="hover:text-[#d4ff00] transition-colors">Back to Top ↑</a>
        </div>
      </div>

    </footer>
  );
};
