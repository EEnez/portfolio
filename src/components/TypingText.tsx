"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TypingText({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 50 
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex === 0) {
      const startTimer = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(startTimer);
    }
    
    if (currentIndex > 0 && currentIndex <= text.length) {
      setDisplayText(text.slice(0, currentIndex));
      
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const hideTimer = setTimeout(() => setShowCursor(false), 1000);
        return () => clearTimeout(hideTimer);
      }
    }
  }, [currentIndex, text, delay, speed]);

  useEffect(() => {
    if (currentIndex >= text.length) return;
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, [currentIndex, text.length]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 md:h-8 bg-interactive-primary ml-1"
        animate={{ 
          opacity: showCursor ? 1 : 0,
          scaleY: showCursor ? 1 : 0.8
        }}
        transition={{ 
          duration: 0.1,
          ease: "easeInOut"
        }}
      />
    </motion.span>
  );
}
