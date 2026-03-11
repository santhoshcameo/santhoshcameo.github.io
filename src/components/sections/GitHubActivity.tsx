'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { GITHUB_USERNAME } from '@/lib/constants';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GitHubActivity() {
  return (
    <section id="github" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and projects"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false}>
            <div className="flex justify-center overflow-x-auto py-4">
              <GitHubCalendar
                username={GITHUB_USERNAME}
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
