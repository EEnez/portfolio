import Image from 'next/image';
import { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function ProfileImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ProfileImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-interactive-primary/20 to-interactive-primary/30 animate-pulse rounded-full" />
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out transform w-full h-full object-cover
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          transition-transform duration-500
          animate-pulse-subtle
        `}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        quality={90}
        priority={priority}
        sizes="(max-width: 768px) 256px, 320px"
      />
      
      <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </div>
  );
}
