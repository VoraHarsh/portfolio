'use client';

import { personalInfo } from '@/data/portfolio';
import { useState, useEffect } from 'react';

interface HeroProps {
  theme: 'light' | 'dark';
  roleIndex: number;
}

export default function Hero({ theme, roleIndex }: HeroProps) {
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Start with bitmoji, then flip to profile after a short delay
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 500); // 500ms delay before flipping

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" style={{ minHeight: 'auto', padding: '8rem 2rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-primary)'}}>
      <div style={{ maxWidth: '1100px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="grid-cols-1 md:grid-cols-2 hero-container">
        <div style={{ order: 1, textAlign: 'left' }} className="hero-content">
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }} className="hero-greeting">
            {personalInfo.greeting}
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.1', color: theme === 'light' ? '#111827' : '#f1f5f9' }} className="hero-name">
            {personalInfo.name}
          </h1>
          <div style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', marginBottom: '2rem', height: '2.5rem' }} className="hero-role">
            <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
              {personalInfo.roles[roleIndex]}
            </span>
          </div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', maxWidth: '600px' }} className="hero-description">
            {personalInfo.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }} className="hero-buttons">
            <a
              href="#contact"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: 'var(--accent)',
                color: 'white',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              style={{
                padding: '0.9rem 2rem',
                backgroundColor: theme === 'light' ? '#eff6ff' : 'transparent',  // Light blue bg
                color: theme === 'light' ? '#2563eb' : 'var(--text-primary)',
                border: `2px solid ${theme === 'light' ? '#3b82f6' : 'var(--border)'}`,  // Thicker border
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = theme === 'light' ? '#3b82f6' : 'var(--border)';
                e.currentTarget.style.backgroundColor = theme === 'light' ? '#eff6ff' : 'transparent';
                e.currentTarget.style.color = theme === 'light' ? '#2563eb' : 'var(--text-primary)';
              }}
            >
              View My Work
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', order: 2, marginBottom: '2rem' }} className="flex hero-photo-container">
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px', height: 'auto', aspectRatio: '1/1' }}>
            {/* Animated Glowing Circle - Behind */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0,
              }}
              className="animate-pulse-glow"
            />
            
            {/* Profile Photo Container with Coin Flip Animation */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: '380px',
              height: 'auto',
              aspectRatio: '1/1',
              margin: '20px auto',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #3b82f6',
              boxShadow: '0 20px 60px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
              perspective: '1000px',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 1.5s ease-in-out',
                transform: showProfile ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* Bitmoji Side (Front) */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                }}>
                  <img 
                    src="/memoji_smiled1.jpeg" 
                    alt="Harsh Bitmoji" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
                {/* Profile Photo Side (Back) */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}>
                  <img 
                    src="/profile.jpg" 
                    alt="Harsh Profile" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
