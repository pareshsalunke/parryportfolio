import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <SectionHeading
            eyebrow="About Me"
            title="Engineer who learned to think like a user"
          />
          <div className="space-y-4 text-stone-600 dark:text-slate-300 leading-relaxed">
            <p>
              I started my career as a software engineer, spending years building APIs, data
              pipelines, and mobile apps. That foundation gave me something rare in product
              management: I can read a pull request, estimate a sprint, and have an honest
              conversation about technical trade-offs.
            </p>
            <p>
              The transition to PM happened when I realised I cared more about{' '}
              <span className="text-stone-800 dark:text-slate-100">why</span> we were building something than{' '}
              <span className="text-stone-800 dark:text-slate-100">how</span>. I moved into product roles focused on
              developer tools and data platforms — areas where my SWE background gives me a
              genuine edge.
            </p>
            <p>
              Today I work on products that sit at the intersection of technical complexity and
              human needs — and I love every part of that challenge.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-2 max-w-sm">
            {[
              {value: '3+', label: 'Years in PM'},
              {value: '7+', label: 'Years in SWE'},
              {value: '12+', label: 'Products Shipped'},
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-stone-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-stone-500 dark:text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
