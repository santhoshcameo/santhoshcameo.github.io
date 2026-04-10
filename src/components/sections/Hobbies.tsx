'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const hobbies = [
  {
    emoji: '🏏',
    title: 'Cricket',
    description: 'German Bundesliga Cricket Player for TSV 1949 Pfaffengrund e.V. — Heidelberg',
   
  },
  {
    emoji: '🏸',
    title: 'Badminton',

   
  },
  {
    emoji: '🥊',
    title: 'Muay Thai',

   
  },
  {
    emoji: '🥋',
    title: 'Jiu-Jitsu',

   
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Beyond the Lab"
          subtitle="When I'm not training models, I'm training myself"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <GlassCard className="h-full text-center">
                <div className="text-4xl mb-3">{hobby.emoji}</div>
                <h3 className="text-primary font-semibold mb-2">{hobby.title}</h3>
                <p className="text-tertiary text-sm mb-3">{hobby.description}</p>
                <p className="text-text-muted text-xs italic">{hobby.funLine}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
