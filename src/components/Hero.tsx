import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Fullstack Developer from Bandung.';

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
                ? 'radial-gradient(circle, hsl(var(--neon-blue) / 0.3), transparent)'
                : 'radial-gradient(circle, hsl(var(--neon-purple) / 0.3), transparent)',
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ye</span> 👋
          </h1>
          
          <div className="h-12 sm:h-16 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {typedText}
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-primary ml-1 animate-pulse" />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="glass border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 rounded-full"
            >
              Get In Touch
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>16 years old • Bandung, Indonesia</p>
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
