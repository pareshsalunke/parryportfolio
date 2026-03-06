import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <SectionHeading
          eyebrow="About Me"
          title="I solve real problems for real people"
          align="center"
        />
        <div className="space-y-4 text-stone-600 dark:text-slate-300 leading-relaxed text-left sm:text-left">
          <p className="text-stone-700 dark:text-slate-200 font-medium">
            I do it by shipping products that work.
          </p>
          <p>
            I started as a software engineer because I wanted to build things. After 10+ years
            doing exactly that — APIs, analytics platforms, mobile apps — I made the jump to
            product management. Not because I stopped wanting to build, but because I wanted to
            shape{' '}
            <span className="text-stone-800 dark:text-slate-100 font-medium">what</span> gets
            built and{' '}
            <span className="text-stone-800 dark:text-slate-100 font-medium">for whom</span>.
            The transition felt natural. Engineering gave me the ability to read a codebase, call
            out a flawed architecture, and have honest conversations about technical trade-offs.
            Product gave me the space to pair that with user research, stakeholder alignment, and
            the strategic thinking I'd always gravitated toward anyway.
          </p>
          <p>
            Most of my PM work has lived in{' '}
            <span className="text-stone-800 dark:text-slate-100 font-medium">platform and integration territory</span>{' '}
            — systems that aren't always visible to end users but are the reason everything else
            functions. I'm drawn to that complexity: the coordination across teams, the dependency
            mapping, the process design that turns chaos into something repeatable.
          </p>
          <p>
            Off the clock: tennis on weekends, and strategy games that probably say too much about
            how my brain works. I find both scratch the same itch as product work — you're
            constantly reading the situation, adapting, and making decisions with incomplete
            information. Sometimes you win, often you learn.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 max-w-sm mx-auto">
          {[
            {value: '3+', label: 'Years in PM'},
            {value: '10+', label: 'Years in SWE'},
            {value: '12+', label: 'Products Shipped'},
          ].map(stat => (
            <div
              key={stat.label}
              className="bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-orange-700 dark:text-white">{stat.value}</p>
              <p className="text-xs text-stone-600 dark:text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
