import { useEffect, useRef, useState } from 'react';
import { Github, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const contactMethods = [
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/davinmaritza',
      color: 'hover:text-primary',
      bgGradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Discord',
      icon: Discord,
      link: 'https://discord.com/users/953277810267545741',
      color: 'hover:text-secondary',
      bgGradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Email',
      icon: Mail,
      link: 'alfarrezald@gmail.com',
      color: 'hover:text-primary',
      bgGradient: 'from-green-500 to-teal-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Let's connect and build something amazing together
          </p>
          
          <div className="glass rounded-2xl p-8 sm:p-12 mb-8">
            <p className="text-center text-lg sm:text-xl text-foreground/90 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.name}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="glass rounded-xl p-6 flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.bgGradient} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`font-semibold text-lg transition-colors ${method.color}`}>
                      {method.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Based in <span className="text-primary font-semibold">Bandung, Indonesia</span>
            </p>
            <p className="text-muted-foreground mt-2">
              Available for freelance work and collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
