import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="glow-blur" style={{ top: '50%', right: '-150px', background: 'var(--primary)', opacity: 0.1 }} />
      
      <div className="container">
        <div className="glass p-12 md:p-16 rounded-[2.5rem] relative z-10">
          <div className="grid grid-2 gap-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Let's Build Something <br />
                <span className="text-gradient">Extraordinary</span>
              </motion.h2>
              <p className="subtitle mb-12">
                Ready to take your digital presence to the next level? Reach out to us today and let's discuss your next project.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-secondary mb-1">Email Us</h4>
                    <p className="text-lg font-medium">arieswebs105@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-secondary mb-1">Call Us</h4>
                    <p className="text-lg font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-secondary mb-1">Visit Us</h4>
                    <p className="text-lg font-medium">123 Tech Avenue, Digital City</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-bg-secondary border border-text-secondary/10 rounded-xl px-8 py-5 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-bg-secondary border border-text-secondary/10 rounded-xl px-8 py-5 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Tell us about your project"
                  className="w-full bg-bg-secondary border border-text-secondary/10 rounded-xl px-8 py-5 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-bg-secondary border border-text-secondary/10 rounded-xl px-8 py-5 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="btn btn-primary w-full justify-center py-5">
                Send Message <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
