import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, CASE_STUDIES } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-2">Portfolio</h2> */}
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900"> Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Case Studies Section */}
        {/* <div className="mt-12">
           <div className="text-center mb-10">
             <h3 className="text-2xl font-bold text-slate-800">Case Studies</h3>
             <p className="text-slate-500">Deep dives into technical challenges I've solved.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {CASE_STUDIES.map((study) => (
               <motion.div
                 key={study.id}
                 whileHover={{ scale: 1.02 }}
                 className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
               >
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ExternalLink size={100} />
                 </div>
                 <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4">
                   {study.category}
                 </span>
                 <h4 className="text-xl font-bold text-slate-900 mb-2">{study.title}</h4>
                 <p className="text-slate-600 text-sm">{study.summary}</p>
                 <a href="#" className="inline-block mt-4 text-purple-600 font-medium text-sm hover:underline">
                   Read more &rarr;
                 </a>
               </motion.div>
             ))}
           </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;