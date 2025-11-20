import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 relative">
      {/* Neon Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold text-white tracking-tighter">
            NK<span className="text-purple-500">.</span>
          </span>
          <p className="text-slate-400 text-sm mt-2">
            © {currentYear} Navyasri Karne. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/Navaysrireddy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/navya-karne-889b381a9" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Linkedin size={20} />
          </a>
          <a href="mailto:karnenavyasrireddy@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;