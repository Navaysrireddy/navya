import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200 inline-block mb-4">
              Available for Work
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-4">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                Navyasri Karne
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-600 font-light h-12 flex items-center">
              I am a{' '}
              <span className="font-semibold text-slate-800 ml-2">
                 <Typewriter
                    words={['Full Stack Developer', 'Next.js & Vue Enthusiast', 'Data Science Student']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                 />
              </span>
            </h2>
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed mt-4">
              A motivated Computer Science graduate transforming ideas into seamless digital experiences through Web Development and Machine Learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#contact" className="group px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-purple-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
              Contact Me 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf" 
              download="Navyasri_Karne_Resume.pdf"
              className="group px-8 py-3 bg-white/80 backdrop-blur-sm text-slate-800 border border-slate-200/50 rounded-full font-medium hover:bg-white hover:text-purple-600 hover:border-purple-200 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-purple-500/20 flex items-center gap-2"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Spinning Rings */}
            <div className="absolute inset-0 border-2 border-purple-200/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-blue-200/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Profile Image Container */}
            <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-white z-10 bg-slate-100">
              <img 
                src="/navya.jpeg"
                alt="Navyasri Karne" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Glass Float Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-10 -left-4 md:left-0 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="font-bold text-xs">DS</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Specialized in</p>
                  <p className="text-sm font-bold text-slate-800">Data Science</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;