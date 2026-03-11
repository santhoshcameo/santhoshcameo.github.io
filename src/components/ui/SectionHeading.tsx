'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-accent to-cyan-400 rounded-full" />
    </motion.div>
  );
}
