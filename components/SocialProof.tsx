import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialProof: React.FC = () => {
  return (
    <section id="social" className="py-24 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-white/10 relative overflow-hidden"
          >
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px] mb-6">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow My Journey</h2>
              <p className="text-gray-400 mb-8 max-w-lg">
                Explore my latest AI experiments, visual arts, and daily insights on Instagram. Join the community of future-thinkers.
              </p>

              <a
                href="https://instagram.com/liminilo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors transform hover:scale-105"
              >
                <span>@liminilo</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;