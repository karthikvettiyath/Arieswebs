import { motion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: 'Client-Centric',
      description: 'We put our clients first, ensuring every solution is tailored to their specific needs and goals.',
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: 'Results-Driven',
      description: 'Our focus is on delivering measurable results that drive growth and success for your business.',
    },
    {
      icon: <Zap className="text-primary" size={24} />,
      title: 'Innovative',
      description: 'We stay ahead of the curve, utilizing the latest technologies to build future-proof solutions.',
    },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-[#0f172a]">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Who We <span className="text-gradient">Are</span>
            </h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Arieswebs is a forward-thinking digital agency dedicated to transforming brands through exceptional web design and development. We believe in the power of digital experiences to connect, engage, and inspire.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our team of passionate experts combines creativity with technical prowess to deliver solutions that not only look stunning but also perform flawlessly. From concept to launch, we are your partners in digital success.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual/Image Side */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                 {/* Placeholder for an About Image or abstract composition */}
                 <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-8xl font-bold opacity-10 text-white">Aries</span>
                 </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-dashed border-white/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-dashed border-white/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
