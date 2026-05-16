interface BadgeProps {
  text: string;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'info' | 'award' | 'highlight';
}

const variantClasses: Record<string, string> = {
  default: 'bg-muted text-secondary border-border-theme',
  accent: 'bg-accent/10 text-accent-light border-accent/30',
  success: 'bg-green-500/10 text-green-400 border-green-500/30',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  award: 'bg-amber-500/10 text-amber-400 border-amber-500/30 animate-glow',
  highlight: 'bg-red-500/15 text-red-400 border-red-500/40 animate-glow',
};

export default function Badge({ text, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${variantClasses[variant]}`}
    >
      {text}
    </span>
  );
}
