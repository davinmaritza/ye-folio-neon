import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      id: 1,
      title: 'Olimpiade Sains Seluruh Indonesia Informatika 2025',
      description: 'Peraih Mendali Emas Predikat A+',
      image: '/prestasi1.jpg',
    },
    {
      id: 2,
      title: 'Nusantara Sains Festival Kedokteran Dasar 2025',
      description: 'Peraih Mendali Emas Predikat A+',
      image: '/prestasi2.jpg',
    },
    {
      id: 3,
      title: 'Ajang Kompetisi Sains Indonesia Informatika 2025',
      description: 'Peraih Mendali Perak Predikat A',
      image: '/prestasi3.jpg',
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
      id="achievements" 
      ref={sectionRef}
      className="py-20 sm:py-32 relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Milestones and recognitions throughout my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-border/50 hover:scale-105 hover:-translate-y-1">
                {/* Image Container (clickable -> opens PDF) */}
                <a
                  href={`/prestasi${achievement.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Open certificate ${achievement.id} (PDF)`}
                  className="block"
                >
                  <div className="relative h-48 sm:h-64 bg-muted overflow-hidden cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:opacity-0 transition-opacity duration-300" />
                    <img
                      src={achievement.image.replace('.jpg', '.svg')}
                      alt={achievement.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23262626" width="400" height="300"/%3E%3Ctext fill="%234a9eff" font-family="sans-serif" font-size="24" text-anchor="middle" x="200" y="150"%3EAchievement %23' + achievement.id + '%3C/text%3E%3C/svg%3E';
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>

                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
