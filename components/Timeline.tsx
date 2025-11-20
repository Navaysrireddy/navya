import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Intern')) return <Briefcase size={18} className="text-white" />;
    if (title.includes('Winner')) return <Trophy size={18} className="text-white" />;
    return <GraduationCap size={18} className="text-white" />;
  };

  return (
    <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-10">
      {TIMELINE.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-md flex items-center justify-center">
             {/* Dot content */}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2">
            <span className="text-sm font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
              {item.year}
            </span>
            <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
          </div>
          <p className="text-slate-700 font-medium text-sm mb-1">{item.institution}</p>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;