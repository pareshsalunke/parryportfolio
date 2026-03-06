import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DetailHero from '@/components/detail/DetailHero';
import MetricsBadge from '@/components/detail/MetricsBadge';
import {mockProjects} from '@/data/mock/projects';

interface Props {
  params: Promise<{slug: string}>;
}

export async function generateStaticParams() {
  return mockProjects.map(p => ({slug: p.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const project = mockProjects.find(p => p.slug === slug);
  return {
    title: project ? `${project.title} — Paresh Salunke` : 'Not Found',
  };
}

export default async function ProjectDetailPage({params}: Props) {
  const {slug} = await params;
  const project = mockProjects.find(p => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <DetailHero
          type="project"
          title={project.title}
          subtitle={project.subtitle}
          company={project.company}
          role={project.role}
          duration={project.duration}
          date={project.date}
          tags={project.tags}
          listingHref="/projects"
          listingLabel="Projects"
        />

        <MetricsBadge metrics={project.metrics} />

        {/* Flow Diagram */}
        {project.flowDiagram && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">How It Works</h2>
            <div className="rounded-xl border border-amber-200 dark:border-slate-700 bg-amber-50 dark:bg-slate-900 overflow-hidden p-4">
              <img
                src={project.flowDiagram}
                alt={project.flowDiagramAlt ?? `${project.title} user flow diagram`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Outcome */}
        <div className="mb-10 p-5 bg-amber-100 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-xl">
          <p className="text-sm font-semibold text-orange-800 dark:text-orange-400 uppercase tracking-widest mb-2">
            Outcome
          </p>
          <p className="text-stone-800 dark:text-slate-200 text-lg leading-relaxed">{project.outcome}</p>
        </div>

        {/* Content sections */}
        {[
          {heading: 'The Challenge', body: project.challenge},
          {heading: 'My Approach', body: project.approach},
        ].map(({heading, body}) =>
          body ? (
            <section key={heading} className="mb-10">
              <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">{heading}</h2>
              <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{body}</p>
            </section>
          ) : null,
        )}

        {/* Results */}
        {project.results.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">Results</h2>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600 dark:text-slate-400">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5 shrink-0">→</span>
                  {r}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech stack */}
        {project.techStack && project.techStack.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 bg-amber-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 rounded-lg border border-amber-200 dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
