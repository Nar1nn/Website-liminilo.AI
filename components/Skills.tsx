import React from 'react';
import { Monitor, Gamepad2, Music, Camera } from 'lucide-react';
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
    title: "AI Game Dev",
    description: "Developing interactive simple games through advanced prompt engineering.",
    icon: Gamepad2,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    borderColor: "border-purple-500/50",
    bgHex: "text-purple-400"
  },
  {
    title: "AI Music & Voice",
    description: "Multi-character AI song covers and voice synthesis.",
    icon: Music,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]",
    borderColor: "border-pink-500/50",
    bgHex: "text-pink-400"
  },
  {
    title: "AI Visual Arts",
    description: "High-fidelity image and video generation in any artistic style.",
    icon: Camera,
    glowColor: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    borderColor: "border-blue-500/50",
    bgHex: "text-blue-400"
  }
];

const SkillCard: React.FC<SkillCardProps & { index: number }> = ({ title, description, icon: Icon, index, glowColor, borderColor, bgHex }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`group relative p-[2px] bg-gradient-to-br from-white/20 to-white/5 ${glowColor} transition-all duration-300 clip-chamfer hover:from-white/40 hover:to-white/10`}
  >
    <div className={`h-full bg-[#0d0d0d] clip-chamfer-inner p-8 flex flex-col gap-4 relative z-10`}>
      <div className="flex items-center gap-6">
        <div className={`relative w-16 h-16 flex items-center justify-center shrink-0`}>
          {/* Faux shadow/glow base matching the mock style */}
          <div className="absolute inset-0 bg-current opacity-20 blur-xl" style={{ color: bgHex === 'text-[#39ff14]' ? '#39ff14' : bgHex === 'text-purple-400' ? '#c084fc' : bgHex === 'text-pink-400' ? '#f472b6' : '#60a5fa' }}></div>
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

const Skills: React.FC = () => {
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
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;