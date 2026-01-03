import { motion } from 'framer-motion';
import { Layout, CreditCard, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Layout className="text-primary" size={32} />,
      title: 'Web Designing',
      description: 'Custom websites that blend aesthetics with functionality to deliver an exceptional user experience.',
    },
    {
      icon: <CreditCard className="text-primary" size={32} />,
      title: 'Review Card Making',
      description: 'Smart NFC cards that help you collect more reviews and build trust with your customers instantly.',
    },
    {
      icon: <BarChart className="text-primary" size={32} />,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to amplify your reach and connect with your target audience effectively.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="bg-[#0f172a] relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our <span className="text-gradient">Core Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="subtitle mx-auto text-center"
            style={{ marginInline: 'auto', color: '#94a3b8' }}
          >
            We provide a comprehensive suite of digital solutions to help your business thrive in the modern web landscape.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-cyan-400/0 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              <div className="mb-6 p-4 rounded-xl bg-blue-500/10 w-fit group-hover:bg-blue-500/20 transition-colors">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                 {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-100 transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
