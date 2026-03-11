'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-xl p-6 ${hover ? 'glass-hover transition-all duration-300' : ''} ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
    >
      {children}
    </motion.div>
  );
}
