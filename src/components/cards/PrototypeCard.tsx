import Link from 'next/link';
import {ArrowRight, ExternalLink} from 'lucide-react';
import {Prototype} from '@/lib/types';
import {formatDate} from '@/lib/utils';

interface PrototypeCardProps {
  prototype: Prototype;
}

export default function PrototypeCard({prototype}: PrototypeCardProps) {
  return (
    <Link href={`/prototypes/${prototype.slug}`} className="block group">
      <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Prototype
            </span>
            <span className="text-xs px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-200 dark:border-emerald-800/50">
              {prototype.tool}
            </span>
          </div>
          <span className="text-xs text-slate-500 shrink-0">{formatDate(prototype.date)}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-snug">
          {prototype.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">{prototype.subtitle}</p>

        {/* Summary */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">{prototype.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {prototype.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-sm text-emerald-400 font-medium group-hover:gap-2 transition-all">
            View details <ArrowRight className="w-4 h-4" />
          </div>
          {prototype.liveUrl && prototype.liveUrl !== '#' && (
            <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
