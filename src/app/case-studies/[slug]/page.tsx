import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DetailHero from '@/components/detail/DetailHero';
import MetricsBadge from '@/components/detail/MetricsBadge';
import {mockCaseStudies} from '@/data/mock/caseStudies';

interface Props {
  params: Promise<{slug: string}>;
}

export async function generateStaticParams() {
  return mockCaseStudies.map(cs => ({slug: cs.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const cs = mockCaseStudies.find(c => c.slug === slug);
  return {
    title: cs ? `${cs.title} — Paresh Salunke` : 'Not Found',
  };
}

export default async function CaseStudyDetailPage({params}: Props) {
  const {slug} = await params;
  const cs = mockCaseStudies.find(c => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <DetailHero
          type="case-study"
          title={cs.title}
          subtitle={cs.subtitle}
          company={cs.company}
          role={cs.role}
          date={cs.date}
          tags={cs.tags}
          listingHref="/case-studies"
          listingLabel="Case Studies"
        />

        <MetricsBadge metrics={cs.metrics} />

        {/* Content sections */}
        {[
          {heading: 'Problem Statement', body: cs.problemStatement},
          {heading: 'Research & Insights', body: cs.researchInsights},
          {heading: 'Solution Design', body: cs.solutionDesign},
        ].map(({heading, body}) =>
          body ? (
            <section key={heading} className="mb-10">
              <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">{heading}</h2>
              <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{body}</p>
            </section>
          ) : null,
        )}

        {/* Learnings */}
        {cs.learnings.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">Key Learnings</h2>
            <ul className="space-y-4">
              {cs.learnings.map((l, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-amber-100/60 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl">
                  <span className="text-orange-700 dark:text-orange-400 font-bold shrink-0">{i + 1}.</span>
                  <p className="text-stone-600 dark:text-slate-400">{l}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Artifacts */}
        {cs.artifacts && cs.artifacts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">Artifacts</h2>
            <div className="flex flex-wrap gap-3">
              {cs.artifacts.map(artifact => (
                <a
                  key={artifact.label}
                  href={artifact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-lg text-sm text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-slate-100 hover:border-orange-300 dark:hover:border-slate-600 transition-colors">
                  {artifact.label} ↗
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
