"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  intensity = 0.3,
  as: Component = 'button',
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(y, [-50, 50], [5, -5]);
  const rotateY = useTransform(x, [-50, 50], [-5, 5]);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        x.set(0);
        y.set(0);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [x, y]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${isMobile ? 'block w-full' : 'inline-block'} cursor-pointer`}
      style={isMobile ? {} : { x, y, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={isMobile ? {} : { scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Component
        className={`${className} transition-all duration-200 ${
          isHovered ? 'shadow-2xl shadow-interactive-primary/20' : ''
        }`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
