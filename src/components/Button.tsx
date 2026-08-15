import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  id,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] whitespace-nowrap text-center';

  const sizeClasses = {
    sm: 'px-5 py-2 text-xs tracking-tight gap-1.5',
    md: 'px-7 py-3 text-sm md:text-base tracking-tight gap-2',
    lg: 'px-8 py-3.5 text-base md:text-lg tracking-tight gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#051A24] text-white hover:bg-[#0c2e3f] btn-primary-shadow border-t border-white/20',
    secondary:
      'bg-white text-[#051A24] hover:bg-[#F6FCFF] btn-secondary-shadow hover:text-[#0D212C]',
    tertiary:
      'bg-white text-[#0D212C] hover:bg-[#f8fafc] btn-tertiary-shadow border border-slate-200/60',
  };

  return (
    <button
      id={id}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </button>
  );
};
