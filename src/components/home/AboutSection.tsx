import SectionHeading from '@/components/ui/SectionHeading';

const pmSkills = [
  'Product Strategy',
  'User Research',
  'Roadmap Planning',
  'Stakeholder Management',
  'A/B Testing',
  'Data Analytics',
  'Go-to-Market',
  'Agile / Scrum',
];

const techSkills = [
  'TypeScript / React',
  'SQL & Data Modeling',
  'REST APIs & OpenAPI',
  'System Design',
  'Python',
  'Git / CI/CD',
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
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {/* PM skills */}
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Product Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {pmSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-900/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech skills */}
            <div>
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                {value: '5+', label: 'Years in PM'},
                {value: '4+', label: 'Years in SWE'},
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
        </div>
      </div>
    </section>
  );
}
