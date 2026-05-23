import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const p = window.location.pathname;
    const h = window.location.hash;
    if (p === '/portfolio' || h === '#/portfolio' || h === '#portfolio') {
      return '/portfolio';
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const p = window.location.pathname;
      const h = window.location.hash;
      if (p === '/portfolio' || h === '#/portfolio' || h === '#portfolio') {
        setCurrentPath('/portfolio');
      } else {
        setCurrentPath('/');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (path === '/') {
      window.history.pushState({}, '', '/');
      setCurrentPath('/');
    } else {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-mcgreen/30">
      <Navbar currentPath={currentPath} onNavigate={navigateTo} />
      
      {currentPath === '/portfolio' ? (
        <Portfolio onNavigate={navigateTo} />
      ) : (
        <main>
          <Hero />
          <Skills onNavigate={navigateTo} />
          <SocialProof onNavigate={navigateTo} />
          <Contact />
        </main>
      )}
      
      <Footer />
      <FloatingAction />
    </div>
  );
}

export default App;