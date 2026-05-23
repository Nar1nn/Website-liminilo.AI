import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingAction from './components/FloatingAction';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-mcgreen/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
      <FloatingAction />
    </div>
  );
}

export default App;