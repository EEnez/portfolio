import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  disableLoadingBlur?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  disableLoadingBlur = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative flex items-center justify-center ${className.includes('group') ? className : `group ${className}`}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 animate-pulse rounded" />
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`
          duration-700 ease-in-out transform
          ${isLoading && !disableLoadingBlur ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          transition-transform duration-500
          ${className.includes('object-cover') ? 'object-cover w-full h-full' : 'object-contain max-w-full max-h-full'}
        `}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        quality={90}
        priority={priority}
        sizes={sizes}
        fill={false}
        style={{
          objectPosition: 'center',
          maxWidth: '100%',
          maxHeight: '100%',
          width: className.includes('object-cover') ? '100%' : 'auto',
          height: className.includes('object-cover') ? '100%' : 'auto',
        }}
      />
      
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
    </div>
  );
} 