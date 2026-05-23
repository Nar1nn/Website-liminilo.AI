import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-background relative z-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
            <h2 className="text-3xl md:text-5xl font-block uppercase tracking-wider text-white">Get In Touch</h2>
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
          </div>
          <div className="w-24 h-1 bg-mcgreen mx-auto box-shadow-glow-green"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.a 
            href="https://wa.me/6285758287612"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative p-[1px] bg-white/20 transition-all duration-300 clip-chamfer hover:bg-white/40"
          >
            <div className="h-full bg-[#0a0a0a] clip-chamfer-inner p-6 md:p-8 flex flex-col justify-center items-start gap-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-mcgreen group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
                <h3 className="text-xl text-mcgreen font-sans font-medium">WhatsApp</h3>
              </div>
              <p className="text-gray-300 font-sans text-lg">085758287612</p>
            </div>
          </motion.a>

          <motion.a 
            href="https://instagram.com/liminilo"
            target="_blank"
            rel="noopener noreferrer"
             initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative p-[1px] bg-white/20 transition-all duration-300 clip-chamfer hover:bg-white/40"
          >
            <div className="h-full bg-[#0a0a0a] clip-chamfer-inner p-6 md:p-8 flex flex-col justify-center items-start gap-4">
              <div className="flex items-center gap-3">
                <Instagram className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                <h3 className="text-xl text-purple-500 font-sans font-medium">Instagram</h3>
              </div>
              <p className="text-gray-300 font-sans text-lg">@liminilo</p>
            </div>
          </motion.a>

          <motion.a 
            href="mailto:contact@liminilo.ai"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative p-[1px] bg-white/20 transition-all duration-300 clip-chamfer hover:bg-white/40"
          >
            <div className="h-full bg-[#0a0a0a] clip-chamfer-inner p-6 md:p-8 flex flex-col justify-center items-start gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-8 h-8 text-gray-300 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(209,213,219,0.5)]" />
                <h3 className="text-xl text-green-400 font-sans font-medium drop-shadow-[0_0_5px_rgba(74,222,128,0.3)]">Let's Collaborate</h3>
              </div>
              <p className="text-gray-400 font-sans text-sm">Open for projects<br/>and opportunities.</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
