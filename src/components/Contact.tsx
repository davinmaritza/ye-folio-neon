import { useEffect, useRef, useState } from 'react';
import { Github, Mail, MessageSquare, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
      icon: MessageSquare,
      link: 'https://discord.com/users/953277810267545741',
      color: 'hover:text-secondary',
      bgGradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Email',
      icon: Mail,
      link: 'mailto:alfarrezald@gmail.com',
      color: 'hover:text-primary',
      bgGradient: 'from-green-500 to-teal-500',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      link: 'https://instagram.com/davinmaritza',
      color: 'hover:text-secondary',
      bgGradient: 'from-purple-500 via-pink-500 to-orange-500',
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

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="glass rounded-xl p-6 flex flex-col items-center gap-4 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer border border-white/5">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${method.bgGradient} flex items-center justify-center group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className={`font-semibold text-lg transition-colors ${method.color}`}>
                      {method.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 hover:scale-105"
              >
                <a href="https://instagram.com/davinmaritza" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={20} />
                  Send Message
                </a>
              </Button>
            </motion.div>
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
