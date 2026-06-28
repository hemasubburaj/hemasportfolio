/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationCert } from './components/EducationCert';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#080808] text-[#f4f4f4] font-sans flex flex-col relative overflow-x-hidden selection:bg-[#d4ff00] selection:text-black">
      
      {/* Background Graphic Elements following Artistic Flair theme blueprint */}
      <div className="fixed top-[-150px] left-[-150px] w-[500px] h-[500px] bg-[#d4ff00] rounded-full blur-[180px] opacity-10 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-150px] right-[-150px] w-[600px] h-[600px] bg-white rounded-full blur-[200px] opacity-[0.04] pointer-events-none z-0"></div>
      
      {/* Subtle vertical center grid guide line */}
      <div className="fixed inset-0 max-w-7xl mx-auto border-x border-white/[0.03] pointer-events-none z-0 hidden lg:block"></div>

      {/* Main Portfolio Sections */}
      <Navbar />
      
      <main className="flex-1 flex flex-col w-full z-10">
        <Hero />
        <Projects />
        <Skills />
        <EducationCert />
        <Contact />
      </main>

    </div>
  );
}
