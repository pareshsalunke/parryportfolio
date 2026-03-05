import {Metadata} from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import {mockCaseStudies} from '@/data/mock/caseStudies';

export const metadata: Metadata = {
  title: 'Case Studies — Paresh Salunke',
  description:
    'Deep-dives into product decisions, research, and outcomes from my work as a Product Manager.',
};

export default function CaseStudiesPage() {
  const caseStudies = mockCaseStudies.filter(cs => cs.status === 'published');

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Deep Dives"
          title="Case Studies"
          subtitle="Problem → Research → Solution → Results. The full story behind key product decisions."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(cs => (
            <CaseStudyCard key={cs.id} caseStudy={cs} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
