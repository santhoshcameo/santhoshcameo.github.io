import { GitHubRepo } from '@/types';
import { GITHUB_USERNAME } from './constants';

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    );
    if (!res.ok) throw new Error('Failed to fetch repos');
    return res.json();
  } catch {
    return [];
  }
}
