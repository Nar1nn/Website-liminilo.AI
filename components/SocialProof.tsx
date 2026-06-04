import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialProofProps {
  onNavigate: (path: string) => void;
}

const SocialProof: React.FC<SocialProofProps> = ({ onNavigate }) => {
  return (
    <section id="social" className="py-24 relative z-10 border-t border-b border-white/5 bg-background overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-65 pointer-events-none"
        style={{
          backgroundImage: 'url("/page3-bg.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-background"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side - Image Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-[1px] bg-gradient-to-br from-white/20 to-white/5 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
              <div className="bg-[#0a0a0a] rounded-2xl p-1">
                 <img 
                   src="/page3-profil.png" 
                   alt="Caesar A'zim Riyadi Profile" 
                   className="w-full h-auto aspect-square object-cover rounded-xl crisp-image"
                 />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col items-start"
          >
            <p className="text-mcgreen font-sans font-medium mb-2 tracking-widest uppercase text-sm">
              EXPLORE MY WORK
            </p>
            
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 leading-tight">
              Let's build the future <br />
              <span className="flex items-center gap-3">
                <span className="text-mcgreen">together.</span>
                <div className="w-8 h-8 bg-mcgreen grid grid-cols-8 grid-rows-8 border-2 border-green-900 shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                   {/* Creeper-ish face dots */}
                   <div className="absolute inset-0 flex items-center justify-center font-block text-black text-[12px] opacity-20">X</div>
                 </div>
              </span>
            </h2>
            
            <p className="text-gray-300 font-sans text-lg mb-8 max-w-md">
              Click below to see how I turn digital creativity into structured solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('/portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-mcgreen hover:bg-mcgreen/80 text-black font-semibold font-sans rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transform hover:-translate-y-0.5 text-base cursor-pointer"
              >
                <span>View Portfolio</span>
                <span className="font-bold">→</span>
              </button>
              
              <a
                href="https://instagram.com/liminilo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-mcgreen text-mcgreen hover:bg-mcgreen/10 font-semibold font-sans rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] transform hover:-translate-y-0.5 text-base"
              >
                <Instagram className="w-5 h-5 shrink-0" />
                <span>Follow @liminilo</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;