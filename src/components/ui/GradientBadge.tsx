import {cn} from '@/lib/utils';

interface GradientBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientBadge({children, className}: GradientBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium',
        'border border-stone-200 dark:border-slate-700 bg-stone-100/60 dark:bg-slate-900/60',
        'text-stone-700 dark:text-slate-300',
        className,
      )}>
      {children}
    </span>
  );
}
