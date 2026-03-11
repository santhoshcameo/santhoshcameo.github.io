'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    filter === 'all' ? publications : publications.filter((p) => p.status === filter);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
          {filtered.map((pub, i) => {
            const isExpanded = expandedId === pub.id;
            const hasExtra = pub.abstract || (pub.keywords && pub.keywords.length > 0);

            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <GlassCard
                  className={`transition-all duration-300 ${
                    pub.award ? 'border-amber-500/30' : ''
                  } ${isExpanded ? 'ring-1 ring-accent/40' : ''}`}
                >
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

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && hasExtra && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/5">
                          {pub.abstract && (
                            <div className="mb-4 pl-4 border-l-2 border-accent/50">
                              <p className="text-sm text-gray-400 italic leading-relaxed">
                                {pub.abstract}
                              </p>
                            </div>
                          )}

                          {pub.keywords && pub.keywords.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {pub.keywords.map((keyword) => (
                                <span
                                  key={keyword}
                                  className="px-2.5 py-0.5 text-xs rounded-full text-accent-light border border-accent/30 bg-accent/5"
                                >
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle button */}
                  {hasExtra && (
                    <button
                      onClick={() => toggleExpand(pub.id)}
                      className={`inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                        isExpanded
                          ? 'border-accent/40 text-accent-light bg-accent/10'
                          : 'border-white/10 text-gray-400 hover:border-accent/30 hover:text-accent-light hover:bg-accent/5'
                      }`}
                    >
                      <span>{isExpanded ? 'Hide Abstract' : 'Abstract'}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex"
                      >
                        <FiChevronDown size={12} />
                      </motion.span>
                    </button>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
