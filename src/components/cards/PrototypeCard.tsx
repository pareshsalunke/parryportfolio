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
      <div className="h-full bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-2xl p-6 hover:border-orange-400/40 hover:bg-amber-100/60 dark:hover:bg-slate-700/60 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-orange-800 uppercase tracking-widest">
              Prototype
            </span>
            <span className="text-xs px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 rounded-full border border-amber-200 dark:border-amber-800/50">
              {prototype.tool}
            </span>
          </div>
          <span className="text-xs text-stone-500 shrink-0">{formatDate(prototype.date)}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-stone-900 dark:text-slate-100 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors leading-snug">
          {prototype.title}
        </h3>
        <p className="text-sm text-stone-600 dark:text-slate-400 mt-1 mb-4">{prototype.subtitle}</p>

        {/* Summary */}
        <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed flex-1">{prototype.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {prototype.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-amber-100 dark:bg-slate-700 text-stone-600 dark:text-slate-300 rounded-full border border-amber-200 dark:border-slate-600">
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1 text-sm text-orange-700 font-medium group-hover:gap-2 transition-all">
            View details <ArrowRight className="w-4 h-4" />
          </div>
          {prototype.liveUrl && prototype.liveUrl !== '#' && (
            <span className="flex items-center gap-1 text-xs text-stone-500 dark:text-slate-500 hover:text-stone-700 dark:hover:text-slate-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
