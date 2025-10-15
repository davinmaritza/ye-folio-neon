import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import LanguageChart from '@/components/LanguageChart';
import Projects from '@/components/Projects';
import ProjectAssistance from '@/components/ProjectAssistance';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <LanguageChart />
      <Projects />
      <ProjectAssistance />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
