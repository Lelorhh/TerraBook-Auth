import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 uppercase tracking-wider text-sm';
  
  const variantClasses = {
    primary: 'bg-emerald-600 hover:bg-emerald-800 text-white shadow-md hover:shadow-lg focus:ring-emerald-500',
    secondary: 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-md hover:shadow-lg focus:ring-emerald-700'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
