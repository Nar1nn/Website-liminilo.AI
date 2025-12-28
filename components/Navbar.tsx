import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Social', href: '#social' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-shadow">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Liminilo<span className="text-blue-400">.AI</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white hover:text-shadow-glow transition-colors text-sm uppercase tracking-widest font-semibold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285758287612"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-gray-800">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
               href="https://wa.me/6285758287612"
               target="_blank"
               rel="noopener noreferrer"
               className="text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg"
               onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;