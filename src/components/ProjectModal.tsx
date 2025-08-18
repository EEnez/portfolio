import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import type { Project } from '@/data/projects';
import OptimizedImage from './OptimizedImage';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-background-card rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-[400px] md:h-[600px] bg-black/50">
        <OptimizedImage
          src={project.images[currentImageIndex].url.replace('-thumbnail.webp', '-modal.png')}
          alt={project.images[currentImageIndex].alt}
          width={1920}
          height={1080}
          className="object-contain w-full h-full pointer-events-none"
          sizes="100vw"
          disableLoadingBlur
        />
        
        {/* Navigation des images */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background-card/80 rounded-full hover:bg-background-card transition-colors"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background-card/80 rounded-full hover:bg-background-card transition-colors"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            
            {/* Indicateurs de position */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-4'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-background-card/80 rounded-full hover:bg-background-card transition-colors"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-text-secondary mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-interactive-primary/10 text-interactive-primary text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-interactive-primary text-white rounded-md font-medium hover:bg-interactive-hover transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              Voir la démo
            </motion.a>
          )}
          {project.codeLink && (
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-interactive-primary text-interactive-primary rounded-md font-medium hover:bg-interactive-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CodeBracketIcon className="h-4 w-4" />
              Voir le code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 