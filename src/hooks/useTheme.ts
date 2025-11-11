'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  // Start with 'dark' as default to match SSR
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from document (set by script tag) or localStorage
    const savedTheme = (typeof window !== 'undefined' 
      ? (localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme') || 'dark')
      : 'dark') as Theme;
    setTheme(savedTheme);
    // Ensure document attribute is set
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  return { theme, toggleTheme, mounted };
}

