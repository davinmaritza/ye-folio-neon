import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LanguageChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const languages = [
    { 
      name: 'C++', 
      level: 92, 
      color: 'from-[#ff003c] via-[#ff003c] to-[#9b00ff]', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    { 
      name: 'JavaScript', 
      level: 90, 
      color: 'from-[#ff003c] via-[#9b00ff] to-[#ff4f9c]', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'C#', 
      level: 80, 
      color: 'from-[#9b00ff] via-[#ff4f9c] to-[#ff003c]', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    { 
      name: 'TypeScript', 
      level: 77, 
      color: 'from-[#ff4f9c] via-[#9b00ff] to-[#ff003c]', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'Python', 
      level: 69, 
      color: 'from-[#9b00ff] via-[#ff003c] to-[#ff4f9c]', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills-chart" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="text-primary" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-center">
              Programming <span className="gradient-text">Proficiency</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            My expertise across different programming languages
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={lang.logo} alt={`${lang.name} logo`} className="w-12 h-12" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Proficiency Level
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <motion.span 
                      className="text-3xl font-bold gradient-text"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      {lang.level}%
                    </motion.span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${lang.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${lang.level}%` } : {}}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.1 + 0.2,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Radial Chart Alternative */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={`radial-${lang.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center gap-4"
                >
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24">
                    <svg className="transform -rotate-90 w-24 h-24">
                      {/* Background circle */}
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted"
                      />
                      {/* Progress circle */}
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "251.2 251.2", strokeDashoffset: 251.2 }}
                        animate={isVisible ? { 
                          strokeDashoffset: 251.2 - (251.2 * lang.level) / 100 
                        } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: index * 0.15 + 0.3,
                          ease: "easeOut"
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff003c" />
                          <stop offset="50%" stopColor="#9b00ff" />
                          <stop offset="100%" stopColor="#ff4f9c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Center logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src={lang.logo} alt={`${lang.name} logo`} className="w-10 h-10" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-foreground">{lang.name}</p>
                    <p className="text-sm text-primary font-bold">{lang.level}%</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageChart;
