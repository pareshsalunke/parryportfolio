import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {CaseStudy} from '@/lib/types';
import {formatDate} from '@/lib/utils';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({caseStudy}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="block group">
      <div className="h-full bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-2xl p-6 hover:border-orange-400/40 hover:bg-amber-100/60 dark:hover:bg-slate-700/60 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-semibold text-orange-800 uppercase tracking-widest">
              Case Study
            </span>
            <p className="text-xs text-stone-600 mt-0.5">{caseStudy.company}</p>
          </div>
          <span className="text-xs text-stone-500 shrink-0">{formatDate(caseStudy.date)}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-stone-900 dark:text-slate-100 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors leading-snug">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-stone-600 dark:text-slate-400 mt-1 mb-4">{caseStudy.subtitle}</p>

        {/* Summary */}
        <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed flex-1">{caseStudy.summary}</p>

        {/* Metrics */}
        {caseStudy.metrics.length > 0 && (
          <div className="flex gap-3 mt-4 flex-wrap">
            {caseStudy.metrics.slice(0, 2).map((m, i) => (
              <div key={i} className="bg-amber-100 dark:bg-slate-700 border border-amber-200 dark:border-slate-600 rounded-lg px-3 py-2">
                <p className="text-sm font-bold text-orange-700 dark:text-orange-400">{m.value}</p>
                <p className="text-xs text-stone-600 dark:text-slate-400">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {caseStudy.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-amber-100 dark:bg-slate-700 text-stone-600 dark:text-slate-300 rounded-full border border-amber-200 dark:border-slate-600">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1 mt-4 text-sm text-orange-700 font-medium group-hover:gap-2 transition-all">
          Read more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
