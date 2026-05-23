import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#39ff14] grid grid-cols-8 grid-rows-8 border-2 border-white/20 shrink-0">
            {/* Simple pixel face representation */}
            <div className="col-span-8 row-span-8 bg-[#39ff14] flex justify-center items-center">
              <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '25% 25%' }}>
                 <div className="absolute inset-0 flex items-center justify-center font-block text-black text-[10px]">CA</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-mcgreen font-sans font-semibold text-lg">Caesar A'zim Riyadi</h3>
            <p className="text-gray-400 font-sans text-sm">AI Specialist & Power User</p>
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