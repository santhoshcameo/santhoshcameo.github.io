import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Research Areas',
    icon: 'FaFlask',
    skills: [
      'Privacy-Preserving AI',
      'Federated Learning',
      'Foundation Models',
      'Adversarial ML',
      'Differential Privacy',
      'LLMs',
      'Responsible AI',
      'AI Safety',
    ],
  },
  {
    title: 'ML Stack',
    icon: 'FaBrain',
    skills: ['PyTorch', 'Hugging Face', 'LangChain', 'Weights & Biases', 'MLflow'],
  },
  {
    title: 'Engineering',
    icon: 'FaCode',
    skills: ['Python', 'FastAPI', 'SQL', 'Bash/Shell', 'Docker', 'Kubernetes', 'Git'],
  },
  {
    title: 'Cloud',
    icon: 'FaCloud',
    skills: ['Azure', 'AWS', 'Google Cloud'],
  },
];
