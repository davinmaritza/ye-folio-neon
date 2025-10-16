import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, DollarSign, Code, CheckCircle, Instagram, Figma, Smartphone, Globe, Wrench, Gamepad2, FileCode, Boxes, Database, Cloud, Cog } from 'lucide-react';

const ProjectAssistance = () => {
  const services = [
    {
      title: "Basic UI/UX",
      price: "10K",
      unit: "/ page",
      features: ["Simple Landing Page", "Basic Responsive Design"],
      time: "1-2 Days",
      Icon: Figma,
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "Modern UI/UX",
      price: "30K",
      unit: "/ page",
      features: ["Modern Landing Page", "Responsive Design", "Premium Styling"],
      time: "1-2 Days",
      Icon: Figma,
      gradient: "from-pink-500/10 to-purple-500/10"
    },
    {
      title: "Website Convert",
      price: "+10K",
      unit: "/ page",
      features: ["Modern Landing Page", "Figma to Code", "Responsive Design"],
      time: "1-2 Days",
      Icon: Globe,
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Mobile Convert",
      price: "+20K",
      unit: "/ page",
      features: ["Modern Landing Page", "For Flutter", "Responsive Design"],
      time: "1-2 Days",
      Icon: Smartphone,
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Basic UI",
      price: "10K",
      unit: "/ page",
      features: ["Simple Landing Page", "Standard Convert Type"],
      time: "1 Day",
      Icon: FileCode,
      gradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Modern UI",
      price: "20K",
      unit: "/ page",
      features: ["Modern Landing Page", "Support Convert Type", "Premium Styling"],
      time: "1-2 Days",
      Icon: Wrench,
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      title: "Kompleks",
      price: "25K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Database MySQL | PHP Native", "Advanced Design"],
      time: "2-3 Days",
      Icon: Database,
      gradient: "from-red-500/10 to-pink-500/10"
    },
    {
      title: "Python Logic",
      price: "15K",
      unit: "/ Paket",
      features: ["Logic Python", "Algorithm Design"],
      time: "1 Day",
      Icon: Code,
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Framework Python Basic",
      price: "20K",
      unit: "/ page",
      features: ["Simple Landing Page", "Basic Responsive Design"],
      time: "1 Day",
      Icon: Cloud,
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "Framework Python Advanced",
      price: "30K",
      unit: "/ page",
      features: ["Complete Landing Page", "Basic Responsive Design", "Advanced Design"],
      time: "1 Day",
      Icon: Cloud,
      gradient: "from-teal-500/10 to-cyan-500/10"
    },
    {
      title: "Python Backend API",
      price: "15K",
      unit: "/ Route",
      features: ["API Python", "Backend Development"],
      time: "1-2 Days",
      Icon: Cog,
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Framework Basic",
      price: "20K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Basic Responsive Design"],
      time: "1-2 Days",
      Icon: Boxes,
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "Framework Kompleks",
      price: "30K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Expert Design"],
      time: "1-2 Days",
      Icon: Boxes,
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      title: "Framework ReactJS",
      price: "40K",
      unit: "/ page",
      features: ["Basic Responsive Design", "Dynamic Design"],
      time: "1-2 Days",
      Icon: Gamepad2,
      gradient: "from-purple-500/10 to-violet-500/10"
    },
    {
      title: "Framework NextJS",
      price: "50K",
      unit: "/ page",
      features: ["Basic Responsive Design", "Dynamic Design"],
      time: "1-2 Days",
      Icon: Gamepad2,
      gradient: "from-violet-500/10 to-fuchsia-500/10"
    },
    {
      title: "ExpressJS API",
      price: "15K",
      unit: "/ Route",
      features: ["Specialist API", "Backend Development"],
      time: "1-2 Days",
      Icon: Cog,
      gradient: "from-fuchsia-500/10 to-pink-500/10"
    },
    {
      title: "Flutter Basic",
      price: "20K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Basic Responsive Design"],
      time: "1-2 Days",
      Icon: Smartphone,
      gradient: "from-sky-500/10 to-blue-500/10"
    },
    {
      title: "Flutter Expert",
      price: "30K",
      unit: "/ page",
      features: ["Dynamic Landing Page", "Expert Design"],
      time: "1-2 Days",
      Icon: Smartphone,
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
  ];

  const processSteps = [
    {
      icon: MessageCircle,
      title: "1. Consultation",
      description: "Discuss project details, features, technologies, and cost estimation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "2. Down Payment",
      description: "50% upfront payment to start the project.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      icon: Code,
      title: "3. Development",
      description: "Project development with regular progress updates.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "4. Delivery",
      description: "Final payment and delivery of full source code.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section 
      id="project-assistance" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Overview Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 gradient-text">
            Project Assistance
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
            Davin is here to help you finish various academic and freelance projects with top-quality results at an affordable price. From simple assignments to thesis-level systems — we make your project journey smooth and stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Start Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all"
              asChild
            >
              <a 
                href="https://instagram.com/davinmaritza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <Instagram className="w-5 h-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 gradient-text">Service Packages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.Icon;
              return (
                <Card 
                  key={index}
                  className="glass p-5 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full group"
                >
                  {/* Icon */}
                  <div className="flex gap-2 mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${service.gradient} border border-primary/20`}>
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground ml-1 text-sm sm:text-base">{service.unit}</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
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
              );
            })}
          </div>
        </div>

        {/* Work Process Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 gradient-text">Work Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="glass p-5 sm:p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full group">
                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAssistance;
