import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Cpu, Sparkles, Code, Terminal } from 'lucide-react';
import porto1 from '../public-portofolio/porto1.png';
import porto2 from '../public-portofolio/porto2.png';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "Sejarawan Universal",
    description: "Talk in real-time with all the historical figures in the world",
    tags: ["Education", "Inclusive Access", "Hobby", "Vibe Coding"],
    image: porto1,
    link: "https://sejarawan-universal.vercel.app"
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Interactive SpinWheel link",
    description: "Professional branding to put all important portfolio links or to promote sales",
    tags: ["Branding", "Interactive", "Marketing", "Vibe Coding"],
    image: porto2,
    link: "https://need-anything.vercel.app"
  },
  {
    id: 3,
    title: "Project 3",
    subtitle: "LuminaRobotics Controller",
    description: "A futuristic hardware controller mockup for robotic path planning, kinematic calculations, and telemetry graphing.",
    tags: ["React", "Lucide Icons", "Robotics", "Modern CSS"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

interface PortfolioProps {
  onNavigate: (path: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Navigation / Back Button Row */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={() => onNavigate('/')}
            className="group inline-flex items-center gap-3 px-6 py-2.5 bg-black/40 border border-white/10 hover:border-mcgreen/50 text-gray-300 hover:text-mcgreen rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)] clip-chamfer"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm tracking-wider uppercase font-sans">Back to Home</span>
          </button>
        </motion.div>

        {/* Page Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
            <h1 className="text-4xl md:text-6xl font-block uppercase tracking-wider text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              PROJECT PORTFOLIO
            </h1>
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
          </motion.div>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto text-lg leading-relaxed mt-4">
            A curated space featuring highly calibrated digital builds, AI agents, and experimental interfaces.
          </p>
          <div className="w-24 h-1 bg-mcgreen mx-auto mt-6 box-shadow-glow-green"></div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-[1px] bg-white/10 hover:bg-mcgreen/30 clip-chamfer transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]"
            >
              <div className="h-full bg-black/90 clip-chamfer-inner p-6 flex flex-col justify-between">
                
                {/* Visual Thumbnail Frame */}
                <div>
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-zinc-900 border border-white/5 mb-6 group-hover:border-mcgreen/30 transition-colors">
                    <img
                      src={project.image}
                      alt={project.subtitle}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1 border border-white/10 rounded-md">
                      <span className="text-mcgreen text-xs font-mono font-bold tracking-widest">{project.title}</span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-sans text-white mb-2 tracking-tight group-hover:text-mcgreen transition-colors">
                      {project.subtitle}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Stats & Anchor */}
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase font-mono tracking-wider bg-white/5 text-gray-300 px-2.5 py-0.5 rounded border border-white/5 group-hover:border-mcgreen/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    className="w-full py-3 bg-white/5 border border-white/10 hover:border-mcgreen hover:bg-mcgreen hover:text-black hover:font-semibold font-sans rounded transition-all duration-300 flex items-center justify-center gap-2 text-sm text-gray-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
