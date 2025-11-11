import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export default function Card({ children, hover = false, className = '', ...props }: CardProps) {
  const baseClasses = 'bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)]';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
}

