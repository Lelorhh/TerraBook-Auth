import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ 
  label, 
  id, 
  error, 
  className = '',
  ...props 
}) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-left font-semibold text-emerald-800 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 border-2 border-emerald-500 rounded-xl focus:border-emerald-700 focus:outline-none transition-colors ${className} ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
