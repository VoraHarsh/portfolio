'use client';

import { skills } from '@/data/portfolio';
import type { SkillCategory } from '@/types';
import {
  Code2,
  Blocks,
  Boxes,
  Box,
  Cpu,
  Variable,
  FileCode,
  Palette,
  AlignLeft,
  Braces,
  Atom,
  Server,
  Cloud,
  CloudCog,
  Database,
  SquareStack,
  Binary,
  Rabbit,
  Workflow,
  PlugZap,
  FlaskConical,
  TestTube2,
  Bug,
  MessageSquare,
  Rocket,
  ChevronRight,
} from 'lucide-react';

interface SkillsProps {
  activeSkillTab: SkillCategory;
  setActiveSkillTab: (tab: SkillCategory) => void;
  theme: 'light' | 'dark';
}

export default function Skills({ activeSkillTab, setActiveSkillTab, theme }: SkillsProps) {
  const filteredSkills = activeSkillTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeSkillTab);

  const iconFor = (name: string, category: SkillCategory) => {
    const commonProps = { size: 28, color: theme === 'light' ? '#2563eb' : '#60a5fa' };
    const n = name.toLowerCase();

    // Direct name matches
    if (n.includes('react')) return <Atom {...commonProps} />;
    if (n.includes('next')) return <ChevronRight {...commonProps} />;
    if (n.includes('typescript')) return <Code2 {...commonProps} />;
    if (n.includes('javascript')) return <Braces {...commonProps} />;
    if (n.includes('html')) return <AlignLeft {...commonProps} />;
    if (n.includes('css')) return <Palette {...commonProps} />;

    if (n.includes('java')) return <Cpu {...commonProps} />;
    if (n.includes('spring')) return <Server {...commonProps} />;
    if (n.includes('node')) return <Box {...commonProps} />;
    if (n.includes('express')) return <PlugZap {...commonProps} />;
    if (n.includes('python')) return <Variable {...commonProps} />;
    if (n.includes('rest')) return <FileCode {...commonProps} />;
    if (n.includes('microservices')) return <Blocks {...commonProps} />;
    if (n.includes('event-driven')) return <Workflow {...commonProps} />;

    if (n.includes('docker')) return <SquareStack {...commonProps} />;
    if (n.includes('kubernetes')) return <Boxes {...commonProps} />;
    if (n.includes('aws') || n.includes('azure') || n.includes('cloud')) return <Cloud {...commonProps} />;
    if (n.includes('ci/cd') || n.includes('jenkins')) return <CloudCog {...commonProps} />;
    if (n.includes('git')) return <Rocket {...commonProps} />;

    if (n.includes('postgres')) return <Database {...commonProps} />;
    if (n.includes('mongo')) return <Database {...commonProps} />;
    if (n.includes('mysql')) return <Database {...commonProps} />;
    if (n.includes('redis')) return <Database {...commonProps} />;
    if (n.includes('cache') || n.includes('query') || n.includes('database')) return <Database {...commonProps} />;

    if (n.includes('rabbitmq')) return <Rabbit {...commonProps} />;
    if (n.includes('kafka')) return <Workflow {...commonProps} />;
    if (n.includes('conductor') || n.includes('workflow')) return <Workflow {...commonProps} />;
    if (n.includes('stream')) return <Binary {...commonProps} />;

    if (n.includes('junit') || n.includes('jest') || n.includes('selenium') || n.includes('cucumber')) return <FlaskConical {...commonProps} />;
    if (n.includes('mockito') || n.includes('playwright') || n.includes('tdd') || n.includes('bdd')) return <TestTube2 {...commonProps} />;

    // Other skills
    if (n.includes('agile') || n.includes('scrum')) return <Rocket {...commonProps} />;
    if (n.includes('jira') || n.includes('confluence') || n.includes('postman')) return <MessageSquare {...commonProps} />;

    // Category fallbacks
    switch (category) {
      case 'frontend': return <Atom {...commonProps} />;
      case 'backend': return <Server {...commonProps} />;
      case 'devops': return <CloudCog {...commonProps} />;
      case 'database': return <Database {...commonProps} />;
      case 'messaging': return <Workflow {...commonProps} />;
      case 'testing': return <Bug {...commonProps} />;
      default: return <Code2 {...commonProps} />;
    }
  };

  return (
        <section id="skills" style={{ 
          minHeight: 'auto',
          padding: '4rem 2rem',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          backgroundColor: 'var(--bg-secondary)'
        }}>
        <div style={{ maxWidth: '1200px', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--accent)' }}>
              Skills & Technologies
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
              My technical toolkit for building exceptional digital infrastructure 🛠️
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {([
              { label: 'Frontend', category: 'frontend' },
              { label: 'Backend', category: 'backend' },
              { label: 'DevOps & Cloud', category: 'devops' },
              { label: 'Database', category: 'database' },
              { label: 'Messaging & Workflow Orchestration', category: 'messaging' },
              { label: 'Testing', category: 'testing' },
              { label: 'Other Skills', category: 'other-skills' },
            ] as const).map(({ label, category }) => {
              const isActive = activeSkillTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveSkillTab(category as SkillCategory)}
                  style={{
                    padding: '0.6rem 1.3rem',
                    backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? (theme === 'light' ? 'white' : 'white') : 'var(--text-primary)',
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Skills Grid - responsive (up to 6 columns on large screens) */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            justifyContent: 'center',
            maxWidth: '1020px',
            margin: '0 auto 3rem',
            width: '100%',
          }} className="skills-grid">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  width: '100%',
                  maxWidth: '140px',
                  margin: '0 auto',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                className="skill-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 1rem',
                  borderRadius: '12px',
                  backgroundColor: '#3b82f610',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f610';
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
                >
                  {iconFor(skill.name, skill.category as SkillCategory)}
                </div>
                <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* Other Skills Section - Always shown at bottom */}
          <div style={{ marginTop: '3rem' }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.75rem',
              justifyContent: 'center',
              maxWidth: '900px',
              margin: '0 auto',
            }}>
              {(() => {
                // Define the skills to show in Other Skills section based on user requirements
                const otherSkillsNames = [
                  'Java (17+)', 'Spring Boot', 'Node.js', 'Python', 'REST APIs', 'Microservices',
                  'React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3',
                  'AWS', 'Docker', 'Kubernetes',
                  'PostgreSQL', 'MongoBD', 'MySQL', 'Redis',
                  'RabbitMQ', 'Kafka',
                  'Agile/Scrum'
                ];
                return skills.filter(skill => otherSkillsNames.includes(skill.name));
              })().map((skill) => (
                <span
                  key={skill.id}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--card-bg)',
                    color: 'var(--text-secondary)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    border: '1px solid var(--border)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
