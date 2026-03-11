'use client';

import { motion } from 'framer-motion';
import { FaFlask, FaBrain, FaCode, FaCloud } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import { skillCategories } from '@/data/skills';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaFlask,
  FaBrain,
  FaCode,
  FaCloud,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Tools and technologies I work with" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || FaCode;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="text-accent-light" size={20} />
                    </div>
                    <h3 className="text-white font-semibold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} text={skill} variant="accent" />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
