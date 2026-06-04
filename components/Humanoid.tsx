import React from 'react';
import { Bot, Zap, ArrowLeft, Monitor, UserCheck, GraduationCap } from 'lucide-react';

interface HumanoidProps {
  onNavigate: (path: string) => void;
}

const Humanoid: React.FC<HumanoidProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#070707] text-white pt-28 pb-24 relative overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-40 pointer-events-none"
        style={{ backgroundImage: `url('/portofolio-bg.png')` }}
      ></div>

      {/* Aesthetic matrix grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

      {/* Decorative Blur elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-mcgreen/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-green-900/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Breadcrumbs */}
        <div className="mb-12">
          <button 
            onClick={() => onNavigate('/')}
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-mcgreen transition font-sans text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="w-5 h-5 text-mcgreen drop-shadow-[0_0_5px_rgba(57,255,20,0.5)]" />
            <span className="text-mcgreen font-mono text-xs uppercase tracking-widest font-bold">Physical Android Systems & Research</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-block uppercase tracking-wider text-white mb-6 leading-tight">
            Humanoid <span className="text-mcgreen text-glow-green">Robotics</span>
          </h1>
          <p className="text-gray-400 font-sans text-lg max-w-3xl leading-relaxed">
            Exploring mechanical bounds and cybernetic pathways. Discover our active design targets as we conceptualize, prototype, and refine production-level robotic and intelligent agent physical solutions.
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-mcgreen/30 via-white/10 to-transparent mt-8" />
        </div>

        {/* TARGET FOR HUMANOID ROBOTICS Section */}
        <div className="p-[1px] bg-gradient-to-br from-white/10 to-white/5 clip-chamfer">
          <div className="bg-[#0f0f0f] clip-chamfer-inner p-8">
            <h3 className="text-2xl font-block uppercase text-white mb-4 tracking-widest flex items-center gap-3">
              <Zap className="w-5 h-5 text-mcgreen animate-pulse" /> TARGET FOR HUMANOID ROBOTICS
            </h3>
            <p className="text-gray-400 font-sans text-sm mb-8 max-w-3xl">
              Focusing on our core three design vectors. Combining digital automation, lifelike interactive helper systems, and expressive education frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
              
              {/* Target 1 */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between group hover:border-mcgreen/30 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-mcgreen/10 border border-mcgreen/20 flex items-center justify-center mb-4 text-mcgreen group-hover:bg-mcgreen/20 transition-all">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <span className="text-mcgreen font-mono text-[10px] block uppercase tracking-widest mb-1 font-bold">TARGET UNIT 01</span>
                  <h4 className="text-white font-sans font-bold text-lg leading-snug mb-3 uppercase tracking-wide group-hover:text-mcgreen transition-colors">
                    AI Agent Life-in-Desktop
                  </h4>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed">
                    Developing and training deep local-first AI system operators that integrate directly inside daily OS environments to handle workflows cooperatively.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">STATUS</span>
                  <span className="text-[10px] font-mono text-yellow-400 bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/20">Character Animation & Lip-Sync</span>
                </div>
              </div>

              {/* Target 2 */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between group hover:border-mcgreen/30 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-mcgreen/10 border border-mcgreen/20 flex items-center justify-center mb-4 text-mcgreen group-hover:bg-mcgreen/20 transition-all">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="text-mcgreen font-mono text-[10px] block uppercase tracking-widest mb-1 font-bold">TARGET UNIT 02</span>
                  <h4 className="text-white font-sans font-bold text-lg leading-snug mb-3 uppercase tracking-wide group-hover:text-mcgreen transition-colors">
                    Realistic Humanoid Assistant
                  </h4>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed">
                    Exploring lifelike physical motion dynamics to synthesize secure, delicate, and helpful interactions for responsive household support contexts.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">STATUS</span>
                  <span className="text-[10px] font-mono text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/20">BLUEPRINT STAGE</span>
                </div>
              </div>

              {/* Target 3 */}
              <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between group hover:border-mcgreen/30 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-mcgreen/10 border border-mcgreen/20 flex items-center justify-center mb-4 text-mcgreen group-hover:bg-mcgreen/20 transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-mcgreen font-mono text-[10px] block uppercase tracking-widest mb-1 font-bold">TARGET UNIT 03</span>
                  <h4 className="text-white font-sans font-bold text-lg leading-snug mb-3 uppercase tracking-wide group-hover:text-mcgreen transition-colors">
                    Realistic Humanoid Teacher
                  </h4>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed">
                    Simulating responsive tutoring micro-expressions and speech dynamics to deliver real-time interactive, empathetic educational lessons.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-500 uppercase">STATUS</span>
                  <span className="text-[10px] font-mono text-red-400 bg-red-500/5 px-2 py-0.5 rounded border border-red-500/20">BLUEPRINT STAGE</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Humanoid;
