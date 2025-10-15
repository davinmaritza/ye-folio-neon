import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, DollarSign, Code, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectAssistance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Basic UI/UX",
      price: "10K",
      unit: "/ page",
      features: ["Simple Landing Page", "Basic Responsive Design"],
      time: "1-2 Days",
      icons: ["🎨"],
      gradient: "from-purple-500/10 to-pink-500/10",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    },
    {
      title: "Modern UI/UX",
      price: "30K",
      unit: "/ page",
      features: ["Modern Landing Page", "Responsive Design", "Premium Styling"],
      time: "1-2 Days",
      icons: ["🎨", "✨"],
      gradient: "from-pink-500/10 to-purple-500/10",
      glow: "shadow-[0_0_20px_rgba(236,72,153,0.4)]"
    },
    {
      title: "Website Convert",
      price: "+10K",
      unit: "/ page",
      features: ["Modern Landing Page", "Figma to Code", "Responsive Design"],
      time: "1-2 Days",
      icons: ["🔄", "💻"],
      gradient: "from-blue-500/10 to-purple-500/10",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]"
    },
    {
      title: "Mobile Convert",
      price: "+20K",
      unit: "/ page",
      features: ["Modern Landing Page", "For Flutter", "Responsive Design"],
      time: "1-2 Days",
      icons: ["📱", "🔄"],
      gradient: "from-cyan-500/10 to-blue-500/10",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.4)]"
    },
    {
      title: "Basic UI",
      price: "10K",
      unit: "/ page",
      features: ["Simple Landing Page", "Standard Convert Type"],
      time: "1 Day",
      icons: ["📄"],
      gradient: "from-yellow-500/10 to-orange-500/10",
      glow: "shadow-[0_0_20px_rgba(234,179,8,0.4)]"
    },
    {
      title: "Modern UI",
      price: "20K",
      unit: "/ page",
      features: ["Modern Landing Page", "Support Convert Type", "Premium Styling"],
      time: "1-2 Days",
      icons: ["✨", "📄"],
      gradient: "from-orange-500/10 to-red-500/10",
      glow: "shadow-[0_0_20px_rgba(249,115,22,0.4)]"
    },
    {
      title: "Kompleks",
      price: "25K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Database MySQL | PHP Native", "Advanced Design"],
      time: "2-3 Days",
      icons: ["🗄️", "💎"],
      gradient: "from-red-500/10 to-pink-500/10",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.4)]"
    },
    {
      title: "Python Logic",
      price: "15K",
      unit: "/ Paket",
      features: ["Logic Python", "Algorithm Design"],
      time: "1 Day",
      icons: ["🐍"],
      gradient: "from-green-500/10 to-emerald-500/10",
      glow: "shadow-[0_0_20px_rgba(34,197,94,0.4)]"
    },
    {
      title: "Framework Python Basic",
      price: "20K",
      unit: "/ page",
      features: ["Simple Landing Page", "Basic Responsive Design"],
      time: "1 Day",
      icons: ["🐍", "⚡"],
      gradient: "from-emerald-500/10 to-teal-500/10",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]"
    },
    {
      title: "Framework Python Advanced",
      price: "30K",
      unit: "/ page",
      features: ["Complete Landing Page", "Basic Responsive Design", "Advanced Design"],
      time: "1 Day",
      icons: ["🐍", "🚀"],
      gradient: "from-teal-500/10 to-cyan-500/10",
      glow: "shadow-[0_0_20px_rgba(20,184,166,0.4)]"
    },
    {
      title: "Python Backend API",
      price: "15K",
      unit: "/ Route",
      features: ["API Python", "Backend Development"],
      time: "1-2 Days",
      icons: ["🔌", "🐍"],
      gradient: "from-cyan-500/10 to-blue-500/10",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.4)]"
    },
    {
      title: "Framework Basic",
      price: "20K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Basic Responsive Design"],
      time: "1-2 Days",
      icons: ["⚛️", "📦"],
      gradient: "from-blue-500/10 to-indigo-500/10",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]"
    },
    {
      title: "Framework Kompleks",
      price: "30K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Expert Design"],
      time: "1-2 Days",
      icons: ["⚛️", "🔥"],
      gradient: "from-indigo-500/10 to-purple-500/10",
      glow: "shadow-[0_0_20px_rgba(99,102,241,0.4)]"
    },
    {
      title: "Framework ReactJS",
      price: "40K",
      unit: "/ page",
      features: ["Basic Responsive Design", "Dynamic Design"],
      time: "1-2 Days",
      icons: ["⚛️"],
      gradient: "from-purple-500/10 to-violet-500/10",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]"
    },
    {
      title: "Framework NextJS",
      price: "50K",
      unit: "/ page",
      features: ["Basic Responsive Design", "Dynamic Design"],
      time: "1-2 Days",
      icons: ["▲", "⚡"],
      gradient: "from-violet-500/10 to-fuchsia-500/10",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.4)]"
    },
    {
      title: "ExpressJS API",
      price: "15K",
      unit: "/ Route",
      features: ["Specialist API", "Backend Development"],
      time: "1-2 Days",
      icons: ["🚂"],
      gradient: "from-fuchsia-500/10 to-pink-500/10",
      glow: "shadow-[0_0_20px_rgba(217,70,239,0.4)]"
    },
    {
      title: "Flutter Basic",
      price: "20K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Basic Responsive Design"],
      time: "1-2 Days",
      icons: ["📱", "💙"],
      gradient: "from-sky-500/10 to-blue-500/10",
      glow: "shadow-[0_0_20px_rgba(14,165,233,0.4)]"
    },
    {
      title: "Flutter Expert",
      price: "30K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Expert Design"],
      time: "1-2 Days",
      icons: ["📱", "⭐"],
      gradient: "from-blue-500/10 to-indigo-500/10",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.4)]"
    },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: "1. Consultation",
      description: "Discuss project details, features, technologies, and cost estimation.",
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]"
    },
    {
      icon: DollarSign,
      title: "2. Down Payment",
      description: "50% upfront payment to start the project.",
      color: "from-cyan-500 to-teal-500",
      glow: "shadow-[0_0_30px_rgba(6,182,212,0.5)]"
    },
    {
      icon: Code,
      title: "3. Development",
      description: "Project development with regular progress updates.",
      color: "from-purple-500 to-pink-500",
      glow: "shadow-[0_0_30px_rgba(168,85,247,0.5)]"
    },
    {
      icon: CheckCircle,
      title: "4. Delivery",
      description: "Final payment and delivery of full source code.",
      color: "from-pink-500 to-rose-500",
      glow: "shadow-[0_0_30px_rgba(236,72,153,0.5)]"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="project-assistance" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Overview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Project Assistance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            ChasoulUIX is here to help you finish various academic and freelance projects with top-quality results at an affordable price. From simple assignments to thesis-level systems — we make your project journey smooth and stress-free.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-[0_0_30px_rgba(255,0,60,0.5)] hover:shadow-[0_0_40px_rgba(255,0,60,0.7)]"
            >
              Start Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Service Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Card 
                  className={`glass p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:${service.glow}`}
                >
                  {/* Tech Icons */}
                  <div className="flex gap-2 mb-4 text-2xl">
                    {service.icons.map((icon, i) => (
                      <span key={i} className="opacity-80 group-hover:scale-110 transition-transform">
                        {icon}
                      </span>
                    ))}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground ml-1">{service.unit}</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Time */}
                  <div className="text-xs text-muted-foreground pt-4 border-t border-border/30">
                    Development time: {service.time}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Work Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Card className={`glass p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:${step.glow}`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${step.glow}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectAssistance;
