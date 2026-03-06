const skillRows = [
  {
    title: 'Platform & API Products',
    accent: 'border-blue-500',
    anchor: 'API Product Ownership',
    anchorColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    tags: ['System Integrations', 'Partner Onboarding', 'White-label Platforms', 'REST APIs & OAuth', 'B2B SaaS'],
  },
  {
    title: 'Data & Product Analytics',
    accent: 'border-emerald-400',
    anchor: 'SQL & Grafana',
    anchorColor: 'bg-emerald-400/10 text-emerald-700 dark:text-emerald-300 border-emerald-400/30',
    tags: ['Funnel Analysis', 'Usage Pattern Analysis', 'Adoption Metrics', 'A/B Testing', 'KPI Definition'],
  },
  {
    title: 'Discovery & Strategy',
    accent: 'border-amber-400',
    anchor: 'Continuous Discovery',
    anchorColor: 'bg-amber-400/10 text-amber-700 dark:text-amber-300 border-amber-400/30',
    tags: ['Roadmapping', 'Design Thinking', 'Workshop Facilitation', 'Hypothesis Testing', 'Backlog Ownership'],
  },
  {
    title: 'Delivery & Stakeholders',
    accent: 'border-pink-400',
    anchor: 'Cross-functional Leadership',
    anchorColor: 'bg-pink-400/10 text-pink-700 dark:text-pink-300 border-pink-400/30',
    tags: ['Regulated Market Delivery', 'C-level Alignment', 'Agile / Scrum / SAFe', 'UX Collaboration', 'Information Architecture'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="divide-y divide-amber-100 dark:divide-slate-700">
          {skillRows.map(row => (
            <div
              key={row.title}
              className={`group flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8 py-8 border-l-2 pl-6 transition-colors ${row.accent}`}>
              {/* Left: title */}
              <div className="lg:w-64 shrink-0">
                <h3 className="text-base font-semibold text-stone-900 dark:text-white leading-snug">
                  {row.title}
                </h3>
              </div>

              {/* Right: tags */}
              <div className="flex flex-wrap gap-2 lg:pt-0.5">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${row.anchorColor}`}>
                  {row.anchor}
                </span>
                {row.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-lg bg-amber-100/60 dark:bg-slate-800 text-stone-700 dark:text-slate-300 border border-amber-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
