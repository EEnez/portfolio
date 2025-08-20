import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  variant?: 'card' | 'modal';
}

export default function ProjectImage({
  src,
  alt,
  className = '',
  priority = false,
  variant = 'card',
}: ProjectImageProps) {
  
  const baseClasses = variant === 'card' 
    ? "w-full h-[200px] md:h-[250px] object-cover rounded-lg"
    : "w-full max-h-[60vh] object-contain rounded-lg";

  return (
    <Image
      src={src}
      alt={alt}
      width={variant === 'card' ? 400 : 800}
      height={variant === 'card' ? 250 : 500}
      className={`${baseClasses} ${className}`}
      quality={90}
      priority={priority}
      sizes={variant === 'card' 
        ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        : "(max-width: 768px) 100vw, 80vw"
      }
    />
  );
}
