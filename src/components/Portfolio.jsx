import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Aurum Travel',
      category: 'E-commerce / Luxury',
      image: '/portfolio_1.png',
      description: 'A premium travel booking platform with glassmorphism UI and immersive imagery.',
    },
    {
      title: 'Terra Furniture',
      category: 'Minimalist Store',
      image: '/portfolio_2.png',
      description: 'Clean, elegant e-commerce experience for a high-end furniture brand.',
    },
    {
      title: 'Crypto Pulse',
      category: 'SaaS Dashboard',
      image: '/portfolio_3.png',
      description: 'Futuristic data visualization platform for cryptocurrency analytics.',
    },
  ];

  return (
    <section id="portfolio" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="subtitle"
            >
              Explore our latest work where creativity meets precision. We build digital products that make an impact.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="btn btn-outline"
          >
            See All Work
          </motion.button>
        </div>

        <div className="grid grid-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] glass border-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-cyan-400 text-sm font-semibold mb-2" style={{ marginInline: '1.5rem' }}>{project.category}</span>
                <h3 className="text-2xl font-bold mb-3 text-white" style={{ marginInline: '1.5rem' }}>{project.title}</h3>
                <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ marginInline: '1.5rem' }}>
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white group/link" style={{ marginInline: '1.5rem' }}>
                  View Case Study <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
