import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border/30">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-foreground/70">
            <span>Built with</span>
            <Heart className="text-primary fill-primary animate-pulse" size={16} />
            <span>by Ye</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ye — All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
