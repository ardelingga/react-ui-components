import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'light' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

/** Modern UI Button component with comprehensive color variants */
export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus-visible:ring-blue-500',
    secondary: 'bg-purple-600 hover:bg-purple-700 text-white rounded-lg focus-visible:ring-purple-500',
    success: 'bg-green-600 hover:bg-green-700 text-white rounded-lg focus-visible:ring-green-500',
    info: 'bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg focus-visible:ring-cyan-500',
    warning: 'bg-amber-600 hover:bg-amber-700 text-white rounded-lg focus-visible:ring-amber-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white rounded-lg focus-visible:ring-red-500',
    dark: 'bg-neutral-900 hover:bg-neutral-700 text-white rounded-lg focus-visible:ring-neutral-500',
    light: 'bg-gray-100 hover:bg-neutral-200 dark:bg-neutral-600 dark:hover:bg-neutral-500 text-gray-900 dark:text-white rounded-lg focus-visible:ring-gray-500',
    link: 'hover:text-blue-600 text-gray-600 hover:bg-gray-50 rounded-lg focus-visible:ring-blue-500 text-decoration-none',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-[11px] text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};