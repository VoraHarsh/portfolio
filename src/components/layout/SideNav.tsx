'use client';

interface SideNavProps {
  sections: string[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function SideNav({ sections, activeSection, scrollToSection }: SideNavProps) {
  return (
    <nav style={{ position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '1rem' }} className="sidenav hidden md:flex">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => scrollToSection(section)}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: activeSection === section ? 'var(--accent)' : 'var(--text-secondary)',
            opacity: activeSection === section ? 1 : 0.5,
            transform: activeSection === section ? 'scale(1.3)' : 'scale(1)',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </nav>
  );
}
