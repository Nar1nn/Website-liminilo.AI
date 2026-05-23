import React from 'react';
import { Monitor, Camera, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Defined locally since we added extra color properties
type SkillCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
  glowColor: string;
  borderColor: string;
  bgHex: string;
};

const skills: SkillCardProps[] = [
  {
    title: "AI Software Engineer",
    description: "Creating Website and APPS with AI.",
    icon: Monitor,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]",
    borderColor: "border-green-500/50",
    bgHex: "text-[#39ff14]"
  },
  {
    title: "AI Visual Arts",
    description: "High-fidelity image and video generation in any artistic style.",
    icon: Camera,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    borderColor: "border-blue-500/50",
    bgHex: "text-blue-400"
  },
  {
    title: "Loading new skills",
    description: "Currently learning more cutting-edge AI technologies and robotic integrations before expanding this portfolio.",
    icon: Sparkles,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.2)]",
    borderColor: "border-yellow-500/30 border-dashed",
    bgHex: "text-yellow-400 animate-pulse"
  }
];

const SkillCard: React.FC<SkillCardProps & { index: number; isFullWidth?: boolean }> = ({ title, description, icon: Icon, index, glowColor, borderColor, bgHex, isFullWidth }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative p-[2px] bg-gradient-to-br from-white/20 to-white/5 ${glowColor} transition-all duration-300 clip-chamfer hover:from-white/40 hover:to-white/10 ${isFullWidth ? 'md:col-span-2' : ''}`}
  >
    <div className={`h-full bg-[#0d0d0d] clip-chamfer-inner p-8 flex flex-col gap-4 relative z-10`}>
      <div className="flex items-center gap-6">
        <div className={`relative w-16 h-16 flex items-center justify-center shrink-0`}>
          {/* Faux shadow/glow base matching the mock style */}
          <div className="absolute inset-0 bg-current opacity-20 blur-xl" style={{ color: bgHex.includes('#39ff14') ? '#39ff14' : bgHex.includes('blue-400') ? '#60a5fa' : bgHex.includes('yellow-400') ? '#facc15' : '#a1a1aa' }}></div>
          <Icon className={`w-12 h-12 relative z-10 ${bgHex} drop-shadow-lg`} />
        </div>
        <h3 className={`text-xl md:text-2xl font-sans font-medium ${bgHex}`}>
          {title}
        </h3>
      </div>
      <p className="text-gray-300 leading-relaxed font-sans mt-2">
        {description}
      </p>
    </div>
  </motion.div>
);

interface SkillsProps {
  onNavigate: (path: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ onNavigate }) => {
  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-65 pointer-events-none"
        style={{
          backgroundImage: 'url("/page2.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-background"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
            <h2 className="text-3xl md:text-5xl font-block uppercase tracking-wider text-white">
              MY SKILLS & EXPERIENCE
            </h2>
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
          </motion.div>
          
          <div className="w-24 h-1 bg-mcgreen mx-auto mt-4 box-shadow-glow-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} isFullWidth={index === 2} />
          ))}
        </div>

        {/* View Full Portfolio Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => onNavigate('/portfolio')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-mcgreen hover:bg-mcgreen/80 text-black font-semibold font-sans rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)] transform hover:-translate-y-0.5 pointer-events-auto"
          >
            <span className="text-base font-bold">View Full Portfolio</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-300 font-bold">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;