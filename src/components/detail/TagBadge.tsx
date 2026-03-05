import {cn} from '@/lib/utils';

interface TagBadgeProps {
  tag: string;
  className?: string;
}

export default function TagBadge({tag, className}: TagBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex text-xs font-medium px-3 py-1 rounded-full',
        'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
        className,
      )}>
      {tag}
    </span>
  );
}
