'use client';

import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  showScrollTop: boolean;
  scrollToTop: () => void;
}

export default function ScrollToTop({ showScrollTop, scrollToTop }: ScrollToTopProps) {
  return (
      <button
      onClick={scrollToTop}
      style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
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
      opacity: showScrollTop ? 1 : 0,
      visibility: showScrollTop ? 'visible' : 'hidden',
      transition: 'all 0.3s ease',
      zIndex: 998,
      color: 'var(--text-primary)',  // ← Add this line
    }}
  >
    <ArrowUp size={20} style={{ color: 'var(--text-primary)' }} />
  </button>
  );
}
