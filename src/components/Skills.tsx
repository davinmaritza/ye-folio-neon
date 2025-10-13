import { useEffect, useRef, useState } from 'react';
import { Globe, Cog, Cloud, Wrench, Gamepad2 } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { 
      name: 'C++', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigY2jUhKluUOGdegO5ISzOos8eBkGBA9Vaw&s',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    { 
      name: 'C#', 
      logo: 'https://w7.pngwing.com/pngs/929/60/png-transparent-net-framework-c-net-core-software-framework-mono-studio-purple-studio-violet-thumbnail.png',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    { 
      name: 'TypeScript', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    { 
      name: 'JavaScript', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500/10'
    },
    { 
      name: 'Python', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
      color: 'from-green-400 to-blue-500',
      bgColor: 'bg-green-500/10'
    },
  ];

  const roles = [
    { icon: Globe, label: 'Web Developer', color: 'from-blue-500 to-cyan-500' },
    { icon: Cog, label: 'Fullstack Developer', color: 'from-purple-500 to-pink-500' },
    { icon: Cloud, label: 'Cloud Computing', color: 'from-cyan-500 to-blue-500' },
    { icon: Wrench, label: 'DevOps', color: 'from-orange-500 to-red-500' },
    { icon: Gamepad2, label: 'Game Developer', color: 'from-green-500 to-teal-500' },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
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
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Languages I work with daily
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 group hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] cursor-pointer relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                     style={{ background: `linear-gradient(135deg, var(--primary), var(--secondary))` }} 
                />
                <div className={`w-20 h-20 rounded-2xl ${skill.bgColor} backdrop-blur-sm flex items-center justify-center p-3 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  <img 
                    src={skill.logo} 
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="font-semibold text-lg group-hover:text-primary transition-colors relative z-10">
                  {skill.name}
                </p>
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden relative z-10">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} transform origin-left transition-transform duration-500 group-hover:scale-x-100 scale-x-75`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-6">Primary Focus</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {roles.map((role, index) => {
                const RoleIcon = role.icon;
                const isActive = index === currentRoleIndex;
                return (
                  <div
                    key={role.label}
                    className={`inline-flex items-center gap-2 glass rounded-full px-6 py-3 transition-all duration-500 ${
                      isActive 
                        ? 'scale-110 shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] ring-2 ring-primary/50' 
                        : 'scale-100 opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <RoleIcon 
                      className={`transition-all duration-500 ${
                        isActive ? 'text-primary' : 'text-foreground/60'
                      }`} 
                      size={20} 
                    />
                    <span 
                      className={`font-semibold transition-all duration-500 ${
                        isActive 
                          ? `text-lg bg-gradient-to-r ${role.color} bg-clip-text text-transparent`
                          : 'text-sm text-foreground/60'
                      }`}
                    >
                      {role.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
