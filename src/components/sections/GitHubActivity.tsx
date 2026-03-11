'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import { useGitHubRepos } from '@/hooks/useGitHubRepos';
import { GITHUB_USERNAME } from '@/lib/constants';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

export default function GitHubActivity() {
  const { repos, loading } = useGitHubRepos();

  return (
    <section id="github" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Open source contributions and projects"
        />

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
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

        {/* Repos */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-xl p-6 animate-pulse">
                <div className="h-5 bg-dark-300 rounded w-3/4 mb-3" />
                <div className="h-4 bg-dark-300 rounded w-full mb-2" />
                <div className="h-4 bg-dark-300 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="h-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium truncate">{repo.name}</h3>
                      <FaExternalLinkAlt className="text-gray-500 text-xs flex-shrink-0" />
                    </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {repo.description || 'No description'}
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      {repo.language && <Badge text={repo.language} variant="accent" />}
                      <span className="flex items-center gap-1">
                        <FaStar /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch /> {repo.forks_count}
                      </span>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
