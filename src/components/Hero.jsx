import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

import heroBg from '../assets/hero-bg.png';
import heroIllustration from '../assets/hero-illustration.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
      </div>

      {/* Background Decor */}
      <div className="glow-blur hero-glow" />
      <div className="glow-blur" style={{ bottom: '-100px', left: '-100px', background: 'var(--primary)', opacity: 0.1 }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold mb-6 border-white/5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Websites that Drive Growth
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Elevate Your Digital <br />
              <span className="text-gradient">Brand Presence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="subtitle text-lg md:text-xl"
            >
              Arieswebs crafts premium digital experiences that combine stunning design with high-performance technology. We build the future of the web, one pixel at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn btn-primary">
                Start Your Project <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">
                View Our Work <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <motion.img
              src={heroIllustration}
              alt="Digital Experience"
              className="w-full h-auto drop-shadow-2xl"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            {/* Decorative elements behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
