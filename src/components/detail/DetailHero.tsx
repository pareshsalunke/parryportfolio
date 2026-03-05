import Link from 'next/link';
import TagBadge from './TagBadge';
import {formatDate} from '@/lib/utils';

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
  project: 'text-blue-400',
  'case-study': 'text-violet-400',
  prototype: 'text-emerald-400',
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
  company,
  role,
  duration,
  date,
  tags,
  listingHref,
  listingLabel,
}: DetailHeroProps) {
  return (
    <div className="mb-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href={listingHref} className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
          {listingLabel}
        </Link>
        <span>/</span>
        <span className="text-slate-500 dark:text-slate-400 truncate">{title}</span>
      </nav>

      {/* Type + date */}
      <div className="flex items-center gap-3 mb-4">
        <span className={`text-sm font-semibold uppercase tracking-widest ${typeColors[type]}`}>
          {typeLabels[type]}
        </span>
        <span className="text-slate-600">·</span>
        <span className="text-sm text-slate-500">{formatDate(date)}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">{title}</h1>
      <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">{subtitle}</p>

      {/* Meta row */}
      {(company || role || duration) && (
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-slate-500 dark:text-slate-400">
          {company && (
            <span>
              <span className="text-slate-400 dark:text-slate-600">Company</span>{' '}
              <span className="text-slate-700 dark:text-slate-300 font-medium">{company}</span>
            </span>
          )}
          {role && (
            <span>
              <span className="text-slate-400 dark:text-slate-600">Role</span>{' '}
              <span className="text-slate-700 dark:text-slate-300 font-medium">{role}</span>
            </span>
          )}
          {duration && (
            <span>
              <span className="text-slate-400 dark:text-slate-600">Duration</span>{' '}
              <span className="text-slate-700 dark:text-slate-300 font-medium">{duration}</span>
            </span>
          )}
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map(tag => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>
      )}

      <div className="mt-10 border-t border-slate-200 dark:border-slate-800" />
    </div>
  );
}
