import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {ExternalLink} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DetailHero from '@/components/detail/DetailHero';
import {mockPrototypes} from '@/data/mock/prototypes';

interface Props {
  params: Promise<{slug: string}>;
}

export async function generateStaticParams() {
  return mockPrototypes.map(p => ({slug: p.slug}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const prototype = mockPrototypes.find(p => p.slug === slug);
  return {
    title: prototype ? `${prototype.title} — Paresh Salunke` : 'Not Found',
  };
}

export default async function PrototypeDetailPage({params}: Props) {
  const {slug} = await params;
  const prototype = mockPrototypes.find(p => p.slug === slug);
  if (!prototype) notFound();

  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <DetailHero
          type="prototype"
          title={prototype.title}
          subtitle={prototype.subtitle}
          date={prototype.date}
          tags={prototype.tags}
          listingHref="/prototypes"
          listingLabel="Prototypes"
        />

        {/* Tool badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs text-stone-600 uppercase tracking-widest">Built with</span>
          <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-sm font-medium rounded-full border border-amber-200 dark:border-amber-800/50">
            {prototype.tool}
          </span>
          {prototype.liveUrl && prototype.liveUrl !== '#' && (
            <a
              href={prototype.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-sm text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-slate-100 rounded-full transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Open Prototype
            </a>
          )}
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-stone-900 dark:text-slate-100 mb-4">About this prototype</h2>
          <p className="text-stone-600 dark:text-slate-400 leading-relaxed">{prototype.description}</p>
        </section>

        {/* Embed placeholder — replaced with real Figma embed in production */}
        {prototype.embedUrl ? (
          <div className="mb-10 rounded-2xl overflow-hidden border border-amber-200 dark:border-slate-800 aspect-video">
            <iframe
              src={prototype.embedUrl}
              className="w-full h-full"
              allowFullScreen
              title={prototype.title}
            />
          </div>
        ) : (
          <div className="mb-10 rounded-2xl border border-amber-200 dark:border-slate-800 bg-amber-100/50 dark:bg-slate-900/50 aspect-video flex items-center justify-center">
            <div className="text-center">
              <p className="text-stone-600 text-sm">Prototype preview</p>
              <p className="text-stone-500 dark:text-slate-600 text-xs mt-1">Embed URL coming soon</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
