import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pfpImage from '@/assets/pfp.png';

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
      {/* Simplified Animated Background */}
      <div className="particle-bg">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              width: Math.random() * 80 + 40 + 'px',
              height: Math.random() * 80 + 40 + 'px',
              background: i % 3 === 0 
                ? 'radial-gradient(circle, hsl(var(--neon-red) / 0.2), transparent)'
                : i % 3 === 1
                ? 'radial-gradient(circle, hsl(var(--neon-purple) / 0.2), transparent)'
                : 'radial-gradient(circle, hsl(var(--neon-pink) / 0.2), transparent)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: Math.random() * 3 + 8 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <div className="animate-fade-in">
          {/* Avatar Badge */}
          <div className="mb-8 flex justify-center">
            <div className="glass rounded-full p-2 animate-float">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,0,60,0.8)]">
                <img 
                  src={pfpImage} 
                  alt="Davin - Fullstack Developer" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text">Davin</span> 👋
          </h1>
          
          {/* Main Headline */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">I'm a Fullstack Developer & Cloud Computing Enthusiast ☁️</span>
          </div>
          
          {/* Typing Animation Subheading */}
          <div className="min-h-16 sm:min-h-20 flex items-center justify-center mb-6">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl">
              {typedText}
              <span className="inline-block w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary via-secondary to-accent ml-1 animate-pulse" />
            </p>
          </div>
          
          <p className="text-sm sm:text-base text-muted-foreground/70 mb-8">
            📍 16 years old • Bandung, Indonesia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
