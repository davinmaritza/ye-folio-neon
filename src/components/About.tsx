import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="about" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="glass rounded-2xl p-8 sm:p-12">
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
              Hey there! I'm Ye, a passionate <span className="text-primary font-semibold">16-year-old developer</span> from Bandung, Indonesia. 
              I discovered my love for coding at a young age and haven't looked back since.
            </p>
            
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed mb-6">
              My journey in tech has been driven by curiosity and a desire to build things that matter. 
              I specialize in <span className="text-secondary font-semibold">web development</span>, creating 
              beautiful and functional applications that solve real-world problems.
            </p>
            
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, learning frameworks, 
              and constantly pushing my boundaries as a developer. I believe in learning by doing, 
              and every project is an opportunity to grow.
            </p>

            <div className="mt-8 pt-8 border-t border-border/30">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-muted-foreground">Languages</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">2+</p>
                  <p className="text-muted-foreground">Years Coding</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">∞</p>
                  <p className="text-muted-foreground">Projects Planned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
