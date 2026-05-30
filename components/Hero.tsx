import React from 'react';
import { motion } from 'framer-motion';

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
              17-year-old from Lampung. Learning from scratch, building with AI, heading to a Chinese robotics lab.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;