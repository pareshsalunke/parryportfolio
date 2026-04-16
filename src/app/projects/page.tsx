import {Metadata} from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/cards/ProjectCard';
import {mockProjects} from '@/data/mock/projects';
import {ArrowLeft} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects — Paresh Salunke',
  description: 'Products and features I have shipped as a Product Manager.',
};

export default function ProjectsPage() {
  const projects = mockProjects.filter(p => p.status === 'published');

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to home
        </Link>
        <SectionHeading
          eyebrow="My Work"
          title="Projects"
          subtitle="Products and features I've shipped, from 0→1 builds to platform-scale improvements."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
