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
          <span className="text-[15px] font-sans text-gray-400 uppercase tracking-[0.25em] mb-4 block font-medium">
            Building Things, Learning Everything
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-[75px] md:leading-[72px] font-block leading-[72px] mb-8 tracking-tight">
            <span className="text-white">Caesar</span>
            <span className="text-mcgreen text-glow-green">AR</span>
          </h1>

          <div className="border-l-2 sm:border-l-4 border-mcgreen pl-4 sm:pl-6 space-y-3 mb-8">
            <p className="text-[19px] leading-[30px] font-sans text-mcgreen font-medium tracking-wide">
              Exploring AI, products, and robotics from scratch.
            </p>
            <p className="text-[20px] leading-[24px] font-sans text-gray-300">
              Turning curiosity into projects, one experiment at a time. <br />
              Building skills today for the things I dream of tomorrow.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;