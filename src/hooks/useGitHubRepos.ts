'use client';

import { useState, useEffect } from 'react';
import { GitHubRepo } from '@/types';
import { fetchGitHubRepos } from '@/lib/github';

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubRepos()
      .then(setRepos)
      .finally(() => setLoading(false));
  }, []);

  return { repos, loading };
}
