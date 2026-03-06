import SectionHeading from '@/components/ui/SectionHeading';

const skillGroups = [
  {
    num: '01',
    title: 'Platform & API Products',
    desc: 'Owning integration-heavy platforms end-to-end, from contract to adoption.',
    anchor: 'API Product Ownership',
    tags: ['System Integrations', 'Partner Onboarding', 'White-label Platforms', 'REST APIs & OAuth', 'B2B SaaS'],
    accentLine: 'bg-blue-500',
    hoverCard: 'hover:bg-slate-100 dark:hover:bg-slate-800/80',
    hoverTag: 'group-hover:text-blue-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10',
    hoverAnchor: 'group-hover:text-blue-200 group-hover:border-blue-500/40 group-hover:bg-blue-500/15',
  },
  {
    num: '02',
    title: 'Data & Product Analytics',
    desc: 'Self-sufficient from query to decision — no analyst required.',
    anchor: 'SQL & Grafana',
    tags: ['Funnel Analysis', 'Usage Pattern Analysis', 'Adoption Metrics', 'A/B Testing', 'KPI Definition'],
    accentLine: 'bg-emerald-400',
    hoverCard: 'hover:bg-slate-100 dark:hover:bg-slate-800/80',
    hoverTag: 'group-hover:text-emerald-300 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10',
    hoverAnchor: 'group-hover:text-emerald-200 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/15',
  },
  {
    num: '03',
    title: 'Discovery & Strategy',
    desc: 'From ambiguous problem to executable roadmap, grounded in evidence.',
    anchor: 'Continuous Discovery',
    tags: ['Roadmapping', 'Design Thinking', 'Workshop Facilitation', 'Hypothesis Testing', 'Backlog Ownership'],
    accentLine: 'bg-amber-400',
    hoverCard: 'hover:bg-slate-100 dark:hover:bg-slate-800/80',
    hoverTag: 'group-hover:text-amber-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/10',
    hoverAnchor: 'group-hover:text-amber-200 group-hover:border-amber-400/40 group-hover:bg-amber-400/15',
  },
  {
    num: '04',
    title: 'Delivery & Stakeholders',
    desc: 'Bridging engineering, compliance, and leadership to keep teams moving.',
    anchor: 'Cross-functional Leadership',
    tags: ['Regulated Market Delivery', 'C-level Alignment', 'Agile / Scrum / SAFe', 'UX Collaboration', 'Information Architecture'],
    accentLine: 'bg-pink-400',
    hoverCard: 'hover:bg-slate-100 dark:hover:bg-slate-800/80',
    hoverTag: 'group-hover:text-pink-300 group-hover:border-pink-400/30 group-hover:bg-pink-400/10',
    hoverAnchor: 'group-hover:text-pink-200 group-hover:border-pink-400/40 group-hover:bg-pink-400/15',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Me"
              title="Engineer who learned to think like a user"
            />
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I started my career as a software engineer, spending years building APIs, data
                pipelines, and mobile apps. That foundation gave me something rare in product
                management: I can read a pull request, estimate a sprint, and have an honest
                conversation about technical trade-offs.
              </p>
              <p>
                The transition to PM happened when I realised I cared more about{' '}
                <span className="text-slate-700 dark:text-slate-300">why</span> we were building something than{' '}
                <span className="text-slate-700 dark:text-slate-300">how</span>. I moved into product roles focused on
                developer tools and data platforms — areas where my SWE background gives me a
                genuine edge.
              </p>
              <p>
                Today I work on products that sit at the intersection of technical complexity and
                human needs — and I love every part of that challenge.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                {value: '3+', label: 'Years in PM'},
                {value: '7+', label: 'Years in SWE'},
                {value: '12+', label: 'Products Shipped'},
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div>
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 gap-px bg-slate-200 dark:bg-slate-800">
              {skillGroups.map((group, i) => (
                <div
                  key={group.num}
                  className={`group relative bg-slate-50 dark:bg-slate-900 p-6 transition-colors ${group.hoverCard} ${
                    i === 0 ? 'rounded-tl-2xl' : i === 1 ? 'rounded-tr-2xl' : i === 2 ? 'rounded-bl-2xl' : 'rounded-br-2xl'
                  }`}>
                  {/* Accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${group.accentLine} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <p className="font-mono text-[10px] tracking-widest text-slate-400 dark:text-slate-600 mb-4 opacity-60">
                    {group.num}
                  </p>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                    {group.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed mb-4 min-h-[36px]">
                    {group.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 transition-all ${group.hoverAnchor}`}>
                      {group.anchor}
                    </span>
                    {group.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 transition-all ${group.hoverTag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-slate-400 dark:text-slate-600 italic text-center">
              7+ years as a software engineer before becoming a PM — technical depth is not a footnote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
