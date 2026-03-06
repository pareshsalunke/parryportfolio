import Navigation from '@/components/Navigation';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import SkillsSection from '@/components/home/SkillsSection';
import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/Footer';
import {mockProjects} from '@/data/mock/projects';
import {WorkItem} from '@/lib/types';

export default function HomePage() {
  const featuredItems: WorkItem[] = [
    ...mockProjects.filter(p => p.featured && p.status === 'published').slice(0, 3),
  ];

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedWorkSection items={featuredItems} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
