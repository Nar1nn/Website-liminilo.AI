import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrWa: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Base64 obfuscated number to prevent bot harvesting ('6285758287612')
  const secureWaEncoded = 'NjI4NTc1ODI4NzYxMg==';

  const getDecodedNumber = (): string => {
    try {
      return atob(secureWaEncoded);
    } catch {
      return '';
    }
  };

  const handleWaDirect = () => {
    const rawNum = getDecodedNumber();
    if (rawNum) {
      window.open(`https://wa.me/${rawNum}?text=Hello%20Liminilo!`, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawNum = getDecodedNumber();
    if (!rawNum) return;

    // Construct the formatted message
    const waMessage = `Halo Liminilo, saya ${formData.name} (${formData.emailOrWa}).\n\nPesan:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(waMessage);

    // Open WhatsApp
    window.open(`https://wa.me/${rawNum}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', emailOrWa: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-background relative z-10 px-6 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-65 pointer-events-none"
        style={{
          backgroundImage: 'url("/page4.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-background"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
            <h2 className="text-3xl md:text-5xl font-block uppercase tracking-wider text-white">Get In Touch</h2>
            <span className="text-mcgreen opacity-50 shrink-0">⚔️</span>
          </div>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto mb-4">
            Have a project or opportunity? Send a message directly using the form below, or reach out through social channels.
          </p>
          <div className="w-24 h-1 bg-mcgreen mx-auto box-shadow-glow-green"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 p-[1px] bg-white/10 clip-chamfer"
          >
            <div className="h-full bg-black/80 clip-chamfer-inner p-8">
              <h3 className="text-xl font-block uppercase tracking-wider text-white mb-6 flex items-center gap-2">
                <span className="text-mcgreen">■</span> Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mcgreen focus:ring-1 focus:ring-mcgreen transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email or WA Number</label>
                  <input
                    type="text"
                    required
                    value={formData.emailOrWa}
                    onChange={(e) => setFormData({ ...formData, emailOrWa: e.target.value })}
                    placeholder="e.g. yourname@email.com"
                    className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mcgreen focus:ring-1 focus:ring-mcgreen transition"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-mcgreen focus:ring-1 focus:ring-mcgreen transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-mcgreen hover:bg-mcgreen/80 text-black font-semibold font-sans rounded transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]"
                  >
                    <Send className="w-5 h-5" />
                    Send on WhatsApp
                  </button>
                </div>

                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-mcgreen bg-mcgreen/10 border border-mcgreen/20 rounded p-3 mt-4 text-sm"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Redirecting to WhatsApp... Message form cleared!</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Details Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 justify-between">
            
            {/* WhatsApp Contact Portal */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              onClick={handleWaDirect}
              className="group cursor-pointer p-[1px] bg-white/10 transition-all duration-300 clip-chamfer hover:bg-white/20 flex-1"
            >
              <div className="h-full bg-[#0a0a0a]/90 clip-chamfer-inner p-6 flex flex-col justify-center items-start gap-3">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-mcgreen group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]" />
                  <h3 className="text-xl text-mcgreen font-sans font-medium">WhatsApp Chat</h3>
                </div>
                <p className="text-gray-300 font-sans text-sm leading-relaxed">
                  Start an instant dynamic chat session securely. Click here to direct-message.
                </p>
                <span className="text-xs text-mcgreen/80 font-mono tracking-wider border border-mcgreen/20 px-2.5 py-1 rounded bg-mcgreen/5 mt-1">
                  SECURE PORTAL
                </span>
              </div>
            </motion.div>

            {/* Instagram Contact Portal */}
            <motion.a 
              href="https://instagram.com/liminilo"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group p-[1px] bg-white/10 transition-all duration-300 clip-chamfer hover:bg-white/20 flex-1"
            >
              <div className="h-full bg-[#0a0a0a]/90 clip-chamfer-inner p-6 flex flex-col justify-center items-start gap-3">
                <div className="flex items-center gap-3">
                  <Instagram className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  <h3 className="text-xl text-purple-500 font-sans font-medium">Instagram</h3>
                </div>
                <p className="text-gray-300 font-sans text-sm">
                  @liminilo
                </p>
                <span className="text-xs text-purple-400/80 font-mono tracking-wider border border-purple-500/20 px-2.5 py-1 rounded bg-purple-500/5 mt-1">
                  VIEW PROFILE
                </span>
              </div>
            </motion.a>

            {/* Email Contact Portal */}
            <motion.a 
              href="mailto:contact@liminilo.ai"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group p-[1px] bg-white/10 transition-all duration-300 clip-chamfer hover:bg-white/20 flex-1"
            >
              <div className="h-full bg-[#0a0a0a]/90 clip-chamfer-inner p-6 flex flex-col justify-center items-start gap-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-8 h-8 text-gray-300 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(209,213,219,0.5)]" />
                  <h3 className="text-xl text-green-400 font-sans font-medium drop-shadow-[0_0_5px_rgba(74,222,128,0.3)]">Let's Collaborate</h3>
                </div>
                <p className="text-gray-400 font-sans text-sm leading-relaxed">
                  Open for new project commissions and creative partnerships.
                </p>
                <span className="text-xs text-green-400/80 font-mono tracking-wider border border-green-500/20 px-2.5 py-1 rounded bg-green-500/5 mt-1">
                  contact@liminilo.ai
                </span>
              </div>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
