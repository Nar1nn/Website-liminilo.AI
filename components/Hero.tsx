import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url("/page1.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 2xl:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-xl md:text-3xl font-sans text-gray-200 mb-2 font-medium">
            The Future engineer
          </h2>
          
          <h1 className="text-6xl md:text-[100px] font-block leading-none mb-6">
            <span className="text-white block mb-2">Robot</span>
            <span className="text-mcgreen block text-glow-green">Humanoid</span>
          </h1>

          <div className="border-l-4 border-mcgreen pl-4 mb-8">
            <p className="text-xl md:text-2xl font-sans text-mcgreen mb-2">
              Caesar A'zim Riyadi:
            </p>
            <p className="text-lg md:text-xl font-sans text-white">
              We are the architects of the future.
            </p>
          </div>

          <motion.a
            href="https://wa.me/6285758287612"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-gradient-to-b from-green-500 to-green-600 border-2 border-[#1f4a1f] text-white font-sans font-medium px-6 py-3 rounded-lg shadow-[inset_0px_-3px_0px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">Chat on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Minecraft-like floating particles/pixels (optional decoration) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-4 h-4 bg-mcgreen/20 animate-pulse border border-mcgreen"></div>
        <div className="absolute top-[40%] right-[20%] w-6 h-6 bg-blue-500/20 animate-pulse border border-blue-500/20"></div>
        <div className="absolute bottom-[30%] left-[30%] w-3 h-3 bg-purple-500/20 animate-pulse border border-purple-500/20"></div>
      </div>
    </section>
  );
};

export default Hero;