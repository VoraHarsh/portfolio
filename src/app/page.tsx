'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import SideNav from '@/components/layout/SideNav';
import ScrollToTop from '@/components/layout/ScrollToTop';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Recommendations from '@/components/sections/Recommendations';
import Contact from '@/components/sections/Contact';
import { personalInfo } from '@/data/portfolio';
import type { SkillCategory } from '@/types';
import Education from '@/components/sections/Education';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSkillTab, setActiveSkillTab] = useState<SkillCategory>('frontend');

  // Theme toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'recommendations', 'contact'];
      const scrollPosition = window.scrollY + 300;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'recommendations', 'contact'];

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <SideNav sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
      
      <Hero theme={theme} roleIndex={roleIndex} />
      <About />
      <Experience />
      <Skills activeSkillTab={activeSkillTab} setActiveSkillTab={setActiveSkillTab} theme={theme} />
      <Projects />
      <Education />
      <Recommendations />
      <Contact theme={theme} />
      
      <Footer />
    </main>
  );
}
