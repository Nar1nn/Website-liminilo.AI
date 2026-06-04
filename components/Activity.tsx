import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Flame, Award, ArrowLeft, Network, AppWindow } from 'lucide-react';

interface ActivityProps {
  onNavigate: (path: string) => void;
}

interface ActivityEvent {
  id: number;
  date: string;
  category: string;
  title: string;
  description: string;
  location: string;
  metrics: string;
  icon: React.ReactNode;
}

const activityImages = [
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    label: "Keynote: AI Power User Orchestrations"
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    label: "Local SME Automation Consultation"
  },
  {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80",
    label: "Interactive Study Jam Session"
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&auto=format&fit=crop&q=80",
    label: "Multi-Model Workflow Demonstration"
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    label: "Open Robotics Mentorship Jams"
  },
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    label: "Autonomous Cafe Agent Live Hack"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    label: "AI Community Interactive Panel"
  },
  {
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    label: "Humanoid Joint Actuator Assembly"
  },
  {
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    label: "Cybernetic Microcontroller Soldering"
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
    label: "Interactive Web App Prototyping"
  }
];

const activities: ActivityEvent[] = [
  {
    id: 1,
    date: "LOADING SOON",
    category: "VOLUNTEER & OUTREACH",
    title: "Ongoing",
    description: "Documentation of digital literacy advocacy, technology mentoring campaigns, and localized community-support actions are currently being prepared for public preview.",
    location: "TBD / Worldwide",
    metrics: "STATUS: COMPILING RECORDS",
    icon: <Users className="w-5 h-5 text-mcgreen animate-pulse" />
  }
];

const Activity: React.FC<ActivityProps> = ({ onNavigate }) => {
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
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <button 
            onClick={() => onNavigate('/')}
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-mcgreen transition font-sans text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Content Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-mcgreen text-xl">■</span>
            <span className="text-mcgreen font-mono text-xs uppercase tracking-widest font-bold">Society, Community & Outreach</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-block uppercase tracking-wider text-white mb-6 leading-tight">
            Activity <span className="text-mcgreen text-glow-green">Society</span>
          </h1>
          <p className="text-gray-400 font-sans text-lg max-w-3xl leading-relaxed">
            This space is designed to document and showcase various social and community initiatives I participate in, such as <strong className="text-white font-semibold">volunteer programs</strong>, interactive <strong className="text-white font-semibold">public speaking workshops</strong>, collaborative <strong className="text-white font-semibold">hackathons</strong>, and community advocacy. Detailed log documentation for these events will be continuously uploaded here in the near future.
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-mcgreen/30 via-white/10 to-transparent mt-8" />
        </div>

        {/* Dynamic Infinite Activity Marquee Gallery */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <span className="text-mcgreen font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-mcgreen rounded-full animate-ping"></span> Live Documentation & Activity Showcase
            </span>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden sm:inline-block">
              ← Hover Carousel to Pause Scroll
            </span>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5 py-8 backdrop-blur-sm">
            {/* Edge fade-out gradients for immersive cinematic focus */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden flex w-full">
              <div className="animate-marquee-glide flex gap-6 pr-6">
                {/* Render two groups of images to enable infinite pixel looping */}
                {[...activityImages, ...activityImages].map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative w-72 h-44 shrink-0 rounded-xl overflow-hidden border border-white/10 group/slide cursor-pointer transition-all duration-300 hover:border-mcgreen/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]"
                  >
                    {/* Futuristic wireframe / placeholder background instead of of unsplash camera photo */}
                    <div className="absolute inset-0 bg-zinc-950/90 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] transition-all duration-700 ease-out group-hover/slide:scale-105 flex items-center justify-center">
                      <div className="absolute inset-4 border border-dashed border-white/5 rounded-lg flex items-center justify-center">
                        <span className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em] group-hover/slide:text-mcgreen/40 transition-colors">
                          SECURE_DATA_SLOT
                        </span>
                      </div>
                    </div>
                    
                    {/* Retro UI Overlay on Hover (emtpied out for now) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      {/* Empty description details */}
                    </div>

                    {/* Passive subtle image number indicator */}
                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[10px] font-mono text-gray-400">
                      IMG_{((idx % activityImages.length) + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Banner / Dynamic Visual Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-[1px] bg-white/10 clip-chamfer"
        >
          <div className="bg-black/90 clip-chamfer-inner p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mcgreen/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="max-w-2xl">
                <span className="text-mcgreen text-xs font-mono tracking-widest uppercase font-bold px-2 py-0.5 border border-mcgreen/20 rounded bg-mcgreen/5 block w-fit mb-3">
                  MISSION STATEMENT
                </span>
                <h3 className="text-2xl font-block uppercase tracking-wider text-white mb-3">Empowering Human Collaborations</h3>
                <p className="text-gray-300 font-sans text-sm leading-relaxed">
                  "Technology is useless unless we synthesize a resilient collaborative layer. My aim is to make elite tools and workflows comprehensible and deployed. I believe AI should act as an enabler of human curiosity of mechanical frontiers."
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/5 min-w-[200px] shrink-0 text-center">
                <Flame className="w-10 h-10 text-mcgreen mb-2 animate-bounce" />
                <span className="text-2xl font-block text-mcgreen">30+</span>
                <span className="text-gray-400 text-xs font-mono uppercase mt-1">Impacted Lifes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Activities Timeline Stack */}
        <div className="space-y-8">
          <h3 className="text-xl font-block uppercase text-white tracking-widest mb-6 flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-mcgreen"></span> Community Timeline
          </h3>

          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-12">
            {activities.map((act, index) => (
              <motion.div 
                key={act.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot with Icon */}
                <span className="absolute -left-[45px] top-1 flex items-center justify-center w-9 h-9 rounded-full bg-black border border-white/10 mt-1 shadow-md group-hover:border-mcgreen/50 transition-colors">
                  {act.icon}
                </span>

                <div className="p-[1px] bg-white/5 group-hover:bg-white/10 clip-chamfer transition-all duration-300">
                  <div className="bg-black/80 clip-chamfer-inner p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-mcgreen text-xs font-mono font-semibold tracking-widest block mb-1">
                          {act.category}
                        </span>
                        <h4 className="text-xl font-sans font-bold text-white group-hover:text-mcgreen transition-colors">
                          {act.title}
                        </h4>
                      </div>
                      <div className="flex flex-col items-start md:items-end text-xs font-mono text-gray-500 gap-1.5 min-w-[150px]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          {act.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          {act.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed mb-6">
                      {act.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-mono border-t border-white/5 pt-4">
                      <span className="text-gray-500">ENGAGEMENT KEYMETRIC:</span>
                      <span className="text-mcgreen font-semibold bg-mcgreen/5 px-2 py-0.5 rounded border border-mcgreen/10">
                        {act.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Bottom Banner */}
        <div className="mt-20 p-8 rounded-2xl bg-zinc-900/30 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-block uppercase tracking-wider text-white mb-2">Let's Build Something Together</h4>
            <p className="text-gray-400 font-sans text-sm">Have an innovative project, shared hackathon initiative, or a unique development venture in mind? Let's connect and push boundaries!</p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigate('/');
                setTimeout(() => {
                  const x = document.getElementById('contact');
                  if (x) x.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="px-6 py-3 bg-mcgreen text-black font-semibold font-sans rounded-xl text-sm transition hover:bg-mcgreen/80 hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] shrink-0"
          >
            Initiate Collaboration
          </button>
        </div>

      </div>
    </div>
  );
};

export default Activity;
