import Link from 'next/link';
import TagBadge from './TagBadge';

interface DetailHeroProps {
  type: 'project' | 'case-study' | 'prototype';
  title: string;
  subtitle: string;
  company?: string;
  role?: string;
  duration?: string;
  date: string;
  tags: string[];
  listingHref: string;
  listingLabel: string;
}

const typeColors = {
  project: 'text-orange-800',
  'case-study': 'text-orange-800',
  prototype: 'text-orange-800',
};

const typeLabels = {
  project: 'Project',
  'case-study': 'Case Study',
  prototype: 'Prototype',
};

export default function DetailHero({
  type,
  title,
  subtitle,
  // company,
  // role,
  // duration,
  // date,
  tags,
  listingHref,
  listingLabel,
}: DetailHeroProps) {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-stone-600 mb-8">
        <Link
          href="/"
          className="hover:text-stone-900 dark:hover:text-slate-300 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={listingHref}
          className="hover:text-stone-900 dark:hover:text-slate-300 transition-colors">
          {listingLabel}
        </Link>
        <span>/</span>
        <span className="text-stone-500 dark:text-slate-400 truncate">
          {title}
        </span>
      </nav>

      {/* Type + date */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-sm font-semibold uppercase tracking-widest ${typeColors[type]}`}>
          {typeLabels[type]}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-slate-100 leading-tight">
        {title}
      </h1>
      <p className="mt-4 text-xl text-stone-600 dark:text-slate-400">
        {subtitle}
      </p>

      {/* Meta row */}
      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag, index) => (
            <TagBadge key={`${tag}-${index}`} tag={tag} />
          ))}
        </div>
      )}

      <div className="mt-10 border-t border-amber-200 dark:border-slate-700" />
    </div>
  );
}
