import {Metadata} from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import PrototypeCard from '@/components/cards/PrototypeCard';
import {mockPrototypes} from '@/data/mock/prototypes';

export const metadata: Metadata = {
  title: 'Prototypes — Paresh Salunke',
  description: 'Interactive prototypes and design concepts built to validate ideas before engineering.',
};

export default function PrototypesPage() {
  const prototypes = mockPrototypes.filter(p => p.status === 'published');

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeading
          eyebrow="Design & Validation"
          title="Prototypes"
          subtitle="High-fidelity prototypes built to test assumptions and align stakeholders before writing a line of production code."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prototypes.map(prototype => (
            <PrototypeCard key={prototype.id} prototype={prototype} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
