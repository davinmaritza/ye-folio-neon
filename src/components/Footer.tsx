import { useEffect, useRef, useState } from 'react';
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
    <footer 
      ref={footerRef}
      className={`relative py-8 sm:py-12 border-t border-border/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:alfarrezald@gmail.com"
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm hidden sm:inline">alfarrezald@gmail.com</span>
            </a>
            
            <a
              href="https://instagram.com/davinmaritza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/70 hover:text-secondary transition-all duration-300 hover:scale-110 group"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm hidden sm:inline">@davinmaritza</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-foreground/70 text-sm">
            <span>Built with</span>
            <Heart className="text-primary fill-primary" size={14} />
            <span>by Ye</span>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Ye — All Rights Reserved
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 flex items-center gap-1 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/30"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
