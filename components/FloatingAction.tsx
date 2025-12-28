import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingAction: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="https://wa.me/6285758287612"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.6)] hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </motion.div>
  );
};

export default FloatingAction;