import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-transparent overflow-hidden shrink-0 flex items-center justify-center">
            <img src="/main-profil.png" alt="Profile" className="w-full h-full object-cover crisp-image" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-mcgreen font-sans font-semibold text-lg">Caesar A'zim Riyadi</h3>
            <p className="text-gray-400 font-sans text-sm">AI Power User · On the way to humanoid robotics</p>
            <p className="text-gray-500 font-sans text-sm">We are the architects of the future.</p>
          </div>
        </div>
        
        <div className="text-mcgreen opacity-70 text-4xl">
           ⚔️
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 text-xs font-sans">
          &copy; {new Date().getFullYear()} Caesar A'zim Riyadi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;