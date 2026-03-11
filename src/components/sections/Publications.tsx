'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import { publications } from '@/data/publications';
import { PublicationStatus } from '@/types';

const statusConfig: Record<PublicationStatus, { label: string; variant: 'success' | 'warning' | 'accent' | 'award' }> = {
  published: { label: 'Published', variant: 'success' },
  'under-review': { label: 'Under Review', variant: 'warning' },
  'in-progress': { label: 'In Progress', variant: 'accent' },
  award: { label: 'Award', variant: 'award' },
};

const filters: { label: string; value: PublicationStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Published', value: 'published' },
  { label: 'Award', value: 'award' },
  { label: 'Under Review', value: 'under-review' },
  { label: 'In Progress', value: 'in-progress' },
];

export default function Publications() {
  const [filter, setFilter] = useState<PublicationStatus | 'all'>('all');

  const filtered =
    filter === 'all' ? publications : publications.filter((p) => p.status === filter);

  return (
    <section id="publications" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Publications"
          subtitle="8 publications across top venues in medical AI and privacy"
        />

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === f.value
                  ? 'bg-accent text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <GlassCard className={pub.award ? 'border-amber-500/30' : ''}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Badge
                    text={statusConfig[pub.status].label}
                    variant={statusConfig[pub.status].variant}
                  />
                  <span className="text-gray-500 text-sm">{pub.year}</span>
                </div>

                <h3 className="text-white font-medium mb-2 leading-snug">{pub.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{pub.authors}</p>
                <p className="text-accent-light text-sm font-medium mb-3">{pub.venue}</p>

                {pub.award && (
                  <div className="flex items-center gap-2 text-amber-400 text-sm mb-3">
                    <FaTrophy />
                    <span>{pub.award}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag} text={tag} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
