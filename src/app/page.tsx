import Navigation from '@/components/Navigation';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/Footer';
import {mockProjects} from '@/data/mock/projects';
import {mockCaseStudies} from '@/data/mock/caseStudies';
import {WorkItem} from '@/lib/types';

export default function HomePage() {
  const featuredItems: WorkItem[] = [
    ...mockProjects.filter(p => p.featured && p.status === 'published').slice(0, 2),
    ...mockCaseStudies.filter(cs => cs.featured && cs.status === 'published').slice(0, 1),
  ];

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedWorkSection items={featuredItems} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
