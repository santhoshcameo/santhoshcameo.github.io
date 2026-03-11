'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import GlassCard from '@/components/ui/GlassCard';
import { profile } from '@/data/profile';
import { StatItem } from '@/types';

const stats: StatItem[] = [
  { label: 'Years of Experience', value: 7, suffix: '+' },
  { label: 'Publications', value: 8, suffix: '' },
  { label: 'Countries (FeTS)', value: 50, suffix: '+' },
  { label: 'Clinics Deployed', value: 36, suffix: '+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <GlassCard hover={false}>
            <p className="text-gray-300 leading-relaxed text-lg">{profile.summary}</p>
          </GlassCard>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
