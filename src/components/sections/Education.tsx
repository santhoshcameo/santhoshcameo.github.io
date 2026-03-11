'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { educationList } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {educationList.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-accent-light" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-accent-light text-sm">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                      <span>{edu.period}</span>
                      <span>|</span>
                      <span>{edu.location}</span>
                    </div>
                    {edu.honors && (
                      <p className="text-green-400 text-sm mt-2">{edu.honors}</p>
                    )}
                    {edu.thesis && (
                      <p className="text-gray-400 text-sm mt-2 italic">
                        Thesis: {edu.thesis}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
