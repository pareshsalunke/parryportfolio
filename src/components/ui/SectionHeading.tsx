import {cn} from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold text-orange-600 dark:text-blue-400 uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone-600 dark:text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
