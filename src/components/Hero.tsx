import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Creating innovative solutions, one line at a time';

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
              background: i % 2 === 0 
                ? 'radial-gradient(circle, hsl(var(--neon-red) / 0.3), transparent)'
                : 'radial-gradient(circle, hsl(var(--dark-red) / 0.3), transparent)',
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
        <div className="animate-fade-in-up">
          {/* Avatar Badge */}
          <div className="mb-8 flex justify-center">
            <div className="glass rounded-full p-1 animate-float">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl sm:text-6xl font-bold text-white shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)]">
                Ye
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Ye</span> 👋
          </h1>
          
          {/* Main Headline */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">I build modern and scalable</span>
            <br />
            <span className="text-foreground">web applications</span>
          </div>
          
          {/* Typing Animation Subheading */}
          <div className="h-12 sm:h-16 flex items-center justify-center mb-6">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              {typedText}
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary ml-1 animate-pulse" />
            </p>
          </div>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Passionate fullstack developer specializing in creating beautiful, functional, and user-friendly digital experiences
          </p>
          
          <p className="text-sm sm:text-base text-muted-foreground/70 mb-8">
            📍 16 years old • Bandung, Indonesia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] text-lg px-8 py-6 rounded-full shadow-lg font-semibold"
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
