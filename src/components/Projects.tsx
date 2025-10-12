import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Arqonara Website',
      description: 'Penyedia Kebutuhan Hosting Terpercaya untuk Proyek Anda.',
      tech: ['Web Hosting', 'Cloud Services', 'VPS'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://arqonara.com/',
      icon: 'Server',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and automated reporting features.',
      tech: ['Python', 'JavaScript', 'PostgreSQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      tech: ['C#', 'TypeScript', 'MongoDB'],
      gradient: 'from-green-500 to-teal-500',
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
      id="projects" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Some of my recent work
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const ProjectWrapper = project.link ? 'a' : 'div';
              const wrapperProps = project.link 
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : {};

              return (
                <ProjectWrapper
                  key={index}
                  {...wrapperProps}
                  className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer block"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Project Image Placeholder with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    {/* Icon for projects with icon property */}
                    {project.icon && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Server size={40} className="text-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Buttons for projects without link */}
                    {!project.link && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                          <Button 
                            size="icon"
                            className="rounded-full bg-white/90 hover:bg-white text-black"
                          >
                            <Github size={20} />
                          </Button>
                          <Button 
                            size="icon"
                            className="rounded-full bg-white/90 hover:bg-white text-black"
                          >
                            <ExternalLink size={20} />
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {/* External link indicator for linked projects */}
                    {project.link && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                          <ExternalLink size={20} className="text-black" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-muted text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ProjectWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
