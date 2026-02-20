import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`card-luxury ${onClick ? 'cursor-pointer hover:shadow-luxury-lg transition-shadow' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
}

export function CardImage({ src, alt, aspectRatio = '16/9' }: CardImageProps) {
  const aspectClasses = {
    '16/9': 'aspect-luxury',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
  };

  return (
    <div className={`${aspectClasses[aspectRatio]} bg-luxury-gray-200 overflow-hidden`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

export function CardContent({ children, padding = 'md' }: CardContentProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={paddingClasses[padding]}>
      {children}
    </div>
  );
}
