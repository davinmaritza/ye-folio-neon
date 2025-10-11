import { useEffect, useRef, useState } from 'react';
import { Code2, Code, FileJson, Braces, Binary } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'C++', icon: Binary, color: 'from-blue-400 to-blue-600' },
    { name: 'C#', icon: Code2, color: 'from-purple-400 to-purple-600' },
    { name: 'TypeScript', icon: FileJson, color: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: Braces, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', icon: Code, color: 'from-green-400 to-blue-500' },
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
      id="skills" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Tech <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Languages I work with daily
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 group hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-75`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-4">Primary Focus</p>
            <div className="inline-flex items-center gap-2 glass rounded-full px-8 py-4">
              <Code2 className="text-primary" size={24} />
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Web Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
