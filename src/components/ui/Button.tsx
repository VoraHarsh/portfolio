import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  style,
  ...props
}: ButtonProps) {
  const baseClasses = 'focus:outline-none whitespace-nowrap';
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  // Inline styles removed - using CSS classes from globals.css instead
  const inlineStyles: Record<string, CSSProperties> = {};

  const combinedStyle: CSSProperties = {
    ...inlineStyles[variant],
    ...style,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
}

