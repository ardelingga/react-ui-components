import React from 'react';

export interface CardProps {
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  /** Card padding */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Card hover effect */
  hoverable?: boolean;
  /** Card clickable state */
  clickable?: boolean;
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export interface CardHeaderProps {
  /** Header content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface CardContentProps {
  /** Content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface CardFooterProps {
  /** Footer content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/** Modern Card component with TailwindCSS styling */
export const Card = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  clickable = false,
  children,
  className = '',
  onClick,
  ...props
}: CardProps) => {
  const baseClasses = 'rounded-lg transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white',
    outlined: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-md',
    filled: 'bg-gray-50 border border-gray-100',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
  };
  
  const interactiveClasses = {
    hoverable: hoverable ? 'hover:shadow-lg' : '',
    clickable: clickable || onClick ? 'cursor-pointer hover:shadow-md' : '',
  };
  
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${interactiveClasses.hoverable} ${interactiveClasses.clickable} ${className}`.trim();
  
  const CardElement = onClick ? 'button' : 'div';
  
  return (
    <CardElement
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </CardElement>
  );
};

/** Card Header component */
export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return (
    <div className={`mb-4 ${className}`.trim()}>
      {children}
    </div>
  );
};

/** Card Content component */
export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`${className}`.trim()}>
      {children}
    </div>
  );
};

/** Card Footer component */
export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return (
    <div className={`mt-4 ${className}`.trim()}>
      {children}
    </div>
  );
};

// Export compound component
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;