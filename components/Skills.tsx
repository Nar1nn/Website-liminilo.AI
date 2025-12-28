import React from 'react';
import { Video, Gamepad2, Music, Camera } from 'lucide-react';
import { SkillCardProps } from '../types';
import { motion } from 'framer-motion';

const skills: SkillCardProps[] = [
  {
    title: "Clip Video Automation",
    description: "Creating viral content workflows with AI automation.",
    icon: Video
  },
  {
    title: "AI Game Dev",
    description: "Developing interactive simple games through advanced prompt engineering.",
    icon: Gamepad2
  },
  {
    title: "AI Music & Voice",
    description: "Multi-character AI song covers and voice synthesis.",
    icon: Music
  },
  {
    title: "AI Visual Arts",
    description: "High-fidelity image and video generation in any artistic style.",
    icon: Camera
  }
];

const SkillCard: React.FC<SkillCardProps & { index: number }> = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-blue-500/50"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Icon className="w-24 h-24 text-white" />
    </div>
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Leveraging cutting-edge generative models to deliver comprehensive solutions across media formats.
          </motion.p>
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