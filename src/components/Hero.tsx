import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import logoGif from '@/assets/logo.gif';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Building high-performance digital experiences powered by innovation and scalability.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="particle-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              background: i % 3 === 0 
                ? 'radial-gradient(circle, hsl(var(--neon-red) / 0.3), transparent)'
                : i % 3 === 1
                ? 'radial-gradient(circle, hsl(var(--neon-purple) / 0.3), transparent)'
                : 'radial-gradient(circle, hsl(var(--neon-pink) / 0.3), transparent)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 4 + 6 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar Badge */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-full p-2 animate-float">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,0,60,0.8)]">
                <img src={logoGif} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm <span className="gradient-text">Davin</span> 👋
          </motion.h1>
          
          {/* Main Headline */}
          <motion.div 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gradient-text">I'm a Fullstack Developer & Cloud Computing Enthusiast ☁️</span>
          </motion.div>
          
          {/* Typing Animation Subheading */}
          <motion.div 
            className="min-h-16 sm:min-h-20 flex items-center justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl">
              {typedText}
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary via-secondary to-accent ml-1 animate-pulse" />
            </p>
          </motion.div>
          
          <motion.p 
            className="text-sm sm:text-base text-muted-foreground/70 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            📍 16 years old • Bandung, Indonesia
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,60,0.6)] text-lg px-8 py-6 rounded-full shadow-lg font-semibold"
            >
              🚀 See My Work
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all text-lg px-8 py-6 rounded-full font-semibold"
            >
              💬 Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
