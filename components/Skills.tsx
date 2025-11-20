import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-2">My Tech Stack</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Technologies I Work With</h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-lg hover:shadow-purple-500/10 flex flex-col items-center justify-center gap-4"
            >
              <div className={`p-4 rounded-full bg-white shadow-sm ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={32} />
              </div>
              <span className="font-medium text-slate-700 group-hover:text-purple-700 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;