const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/5 bg-bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-xl font-bold mb-4">
              <span className="text-gradient">Aries</span>webs
            </a>
            <p className="text-text-secondary text-sm text-center md:text-left max-w-xs">
              Crafting premium digital experiences for forward-thinking brands worldwide.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#services" className="text-sm text-text-secondary hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="text-sm text-text-secondary hover:text-white transition-colors">Portfolio</a>
            <a href="#about" className="text-sm text-text-secondary hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm text-text-secondary hover:text-white transition-colors">Contact</a>
          </div>
          
          <p className="text-text-secondary text-sm">
            © {currentYear} Arieswebs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
