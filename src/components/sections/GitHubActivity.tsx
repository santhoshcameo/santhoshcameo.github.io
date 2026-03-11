'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { GITHUB_USERNAME } from '@/lib/constants';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 2016 }, (_, i) => currentYear - i);

export default function GitHubActivity() {
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);

  return (
    <section id="github" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and projects"
        />

        {/* Year selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedYear(undefined)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedYear === undefined
                ? 'bg-accent text-white'
                : 'glass text-gray-400 hover:text-white'
            }`}
          >
            Last 12 months
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedYear === year
                  ? 'bg-accent text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false}>
            <div className="flex justify-center overflow-x-auto py-4">
              <GitHubCalendar
                key={selectedYear ?? 'last'}
                username={GITHUB_USERNAME}
                year={selectedYear}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={14}
              />
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
