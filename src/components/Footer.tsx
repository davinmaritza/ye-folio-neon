import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.footer 
      ref={footerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-12 border-t border-border/30"
    >
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Contact Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="mailto:alfarrezald@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
              <span className="text-sm hidden sm:inline">alfarrezald@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="https://instagram.com/davinmaritza"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-foreground/70 hover:text-secondary transition-colors group"
            >
              <Instagram className="w-5 h-5 group-hover:animate-pulse" />
              <span className="text-sm hidden sm:inline">@davinmaritza</span>
            </motion.a>
          </div>

          {/* Built with love */}
          <div className="flex items-center gap-2 text-foreground/70">
            <span>Built with</span>
            <Heart className="text-primary fill-primary animate-pulse" size={16} />
            <span>by Ye</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ye — All Rights Reserved
          </p>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 glass px-4 py-2 rounded-full"
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
