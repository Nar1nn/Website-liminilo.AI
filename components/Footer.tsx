import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Caesar A'zim Riyadi. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          AI Specialist & Power User
        </p>
      </div>
    </footer>
  );
};

export default Footer;