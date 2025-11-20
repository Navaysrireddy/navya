import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE (Info Section) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">
              Contact Me
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Connect!
            </h3>

            <p className="text-slate-400 text-lg mb-10 max-w-md">
              I am currently looking for opportunities in 
              <strong> Full Stack Development</strong> and 
              <strong> Data Science</strong>.  
              Whether you have a question, collaboration idea, or a job opportunity — feel free to reach out!
            </p>

            {/* INFO BOXES */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:karnenavyasrireddy@gmail.com"
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    karnenavyasrireddy@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a
                    href="tel:+917569769637"
                    className="text-white font-medium hover:text-purple-400 transition-colors"
                  >
                    +91 7569769637
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="flex gap-4 mt-10">
              
              {/* GitHub */}
              <a
                href="https://github.com/Navaysrireddy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium
                           hover:bg-purple-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/navya-sri-reddy-karne-889b381a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium
                           hover:bg-blue-600 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE (FORM) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-slate-400">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                               focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                             focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white
                             focus:outline-none focus:border-purple-500 transition-colors"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl
                           hover:opacity-90 transition-opacity shadow-lg shadow-purple-600/20"
              >
                Send Message
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
