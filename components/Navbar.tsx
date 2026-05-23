import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Pickaxe, Briefcase, Mail } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { label: 'Skills', href: '#skills', icon: <Pickaxe className="w-4 h-4" /> },
  { label: 'Portfolio', href: '#social', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (isOpen) return; // Keep visible if mobile menu is actively open
      
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'py-4 glass bg-black/40 shadow-lg' : 'py-6 bg-transparent'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl">
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-[#39ff14] grid grid-cols-8 grid-rows-8 border-2 border-white/20">
            {/* Simple pixel face representation */}
            <div className="col-span-8 row-span-8 bg-[#39ff14] flex justify-center items-center">
              <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '25% 25%' }}>
                 <div className="absolute inset-0 flex items-center justify-center font-block text-[10px] text-black">CA</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-block tracking-tighter leading-none text-white">
              Caesar
            </span>
            <span className="text-xs md:text-sm font-block tracking-widest text-gray-400 leading-none mt-1">
              A'ZIM RIYADI
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-xl">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-sans ${
                index === 0 
                ? 'bg-white/10 text-white shadow-[inset_0_0_10px_rgba(57,255,20,0.2)] border border-mcgreen/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className={index === 0 ? "text-mcgreen drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" : "text-white/50"}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>

        {/* Right spacing for desktop, Mobile Toggle for mobile */}
        <div className="hidden md:block w-[120px]"></div>
        
        <button
          className="md:hidden text-white bg-black/50 p-2 rounded-md border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-gray-800">
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 p-4 rounded-lg text-lg font-sans"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-mcgreen">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;