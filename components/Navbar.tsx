import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Users, Bot } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { label: 'Projects', href: '/portfolio', icon: <Briefcase className="w-4 h-4" /> },
  { label: 'Activity', href: '/activity', icon: <Users className="w-4 h-4" /> },
  { label: 'Humanoid', href: '/humanoid', icon: <Bot className="w-4 h-4" /> },
];

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out navbar-container ${
        scrolled ? 'py-4 navbar-glass bg-black/40 shadow-lg' : 'py-6 bg-transparent border-b border-transparent'
      } ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center max-w-7xl">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-10 h-10 bg-transparent overflow-hidden flex items-center justify-center">
            <img src="/main-profil.png" alt="Caesar" className="w-full h-full object-cover crisp-image" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-block tracking-tighter leading-none text-white">
              Liminilo
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-xl">
          {navItems.map((item) => {
            const isItemActive = currentPath === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm font-sans ${
                  isItemActive 
                  ? 'bg-white/10 text-white shadow-[inset_0_0_10px_rgba(57,255,20,0.2)] border border-mcgreen/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={isItemActive ? "text-mcgreen drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" : "text-white/50"}>
                  {item.icon}
                </span>
                {item.label}
              </a>
            );
          })}
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
            {navItems.map((item) => {
              const isItemActive = currentPath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 p-4 rounded-lg text-lg font-sans transition-all ${
                    isItemActive
                    ? 'bg-white/10 text-white border border-mcgreen/30 shadow-[inset_0_0_10px_rgba(57,255,20,0.15)] font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={(e) => {
                    setIsOpen(false);
                    e.preventDefault();
                    onNavigate(item.href);
                  }}
                >
                  <span className={isItemActive ? "text-mcgreen drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]" : "text-white/50"}>
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
