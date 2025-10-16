import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const LanguageChart = lazy(() => import('@/components/LanguageChart'));
const Projects = lazy(() => import('@/components/Projects'));
const ProjectAssistance = lazy(() => import('@/components/ProjectAssistance'));
const Achievements = lazy(() => import('@/components/Achievements'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Skills />
        <LanguageChart />
        <Projects />
        <ProjectAssistance />
        <Achievements />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
