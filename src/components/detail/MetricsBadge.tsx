import {Metric} from '@/lib/types';

interface MetricsBadgeProps {
  metrics: Metric[];
}

export default function MetricsBadge({metrics}: MetricsBadgeProps) {
  if (!metrics.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
      {metrics.map((metric, i) => (
        <div
          key={i}
          className="bg-amber-100 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-5 text-center">
          <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">{metric.value}</p>
          <p className="text-sm font-medium text-stone-700 dark:text-slate-300 mt-1">{metric.label}</p>
          {metric.context && (
            <p className="text-xs text-stone-600 dark:text-slate-500 mt-1">{metric.context}</p>
          )}
        </div>
      ))}
    </div>
  );
}
