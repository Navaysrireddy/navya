import React from 'react';
import Timeline from './Timeline';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-purple-600 uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-xl md:text-xl font-bold text-slate-900 mb-6">Driven by Code & Data</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            I am a recent graduate with a <strong>B.E. in Computer Science (Data Science Minor)</strong> from <strong>KG Reddy College of Engineering and Technology</strong> (2020–2024). 
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            My technical journey is built on a strong foundation in <strong>Python, Java, and the MERN stack</strong>. I have also expanded my skillset to include modern frontend technologies like <strong>Next.js, Vue.js, and TypeScript</strong>. I am passionate about applying these skills to solve complex problems, evidenced by my work on a <strong>Deepfake Video Detection System</strong>.
            <br /><br />
            Beyond my technical abilities, I bring strong soft skills to the table including <strong>Time Management, Leadership, and Problem Solving</strong>. I am a responsible and motivated individual, eager to start my career as a software developer where I can continuously learn and contribute to impactful solutions.
          </p>
          
          {/* Stats Row */}
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">7.01</p>
              <p className="text-sm text-slate-500 font-medium">CGPA</p>
            </div>
             <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">2024</p>
              <p className="text-sm text-slate-500 font-medium">Graduation Year</p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-2xl">
             <p className="text-sm text-purple-900 font-medium italic">
               "Seeking a challenging role to utilize my skills in Full Stack Development and Data Science to build innovative solutions."
             </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
};

export default About;