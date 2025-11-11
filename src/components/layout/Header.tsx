'use client';

import { Moon, Sun } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 1000, display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }} className="header-buttons">
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '0.7rem 1.5rem',
          backgroundColor: theme === 'light' ? '#eff6ff' : 'var(--card-bg)',  // Light blue bg in light mode
          color: theme === 'light' ? '#2563eb' : 'var(--text-primary)',  // Blue text in light mode
          border: `2px solid ${theme === 'light' ? '#3b82f6' : 'var(--border)'}`,  // Thicker border
          borderRadius: '12px',
          fontSize: '0.95rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: 'var(--shadow)',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.backgroundColor = '#3b82f6';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.borderColor = '#3b82f6';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.backgroundColor = theme === 'light' ? '#eff6ff' : 'var(--card-bg)';
          e.currentTarget.style.color = theme === 'light' ? '#2563eb' : 'var(--text-primary)';
          e.currentTarget.style.borderColor = theme === 'light' ? '#3b82f6' : 'var(--border)';
        }}
      >
        Resume
      </a>
      <button
        onClick={toggleTheme}
        style={{
          width: '44px',
          height: '44px',
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow)',
          transition: 'all 0.3s ease',
          color: 'var(--text-primary)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.borderColor = 'var(--accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
        {theme === 'dark' ? <Moon size={20} color="#f5b64d"/> : <Sun size={20} color="#ffb733"/>}
      </button>
    </div>
  );
}
