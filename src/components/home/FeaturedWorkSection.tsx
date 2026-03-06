import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/cards/ProjectCard';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import PrototypeCard from '@/components/cards/PrototypeCard';
import {WorkItem} from '@/lib/types';

interface FeaturedWorkSectionProps {
  items: WorkItem[];
}

export default function FeaturedWorkSection({items}: FeaturedWorkSectionProps) {
  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-amber-100/40 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects & case studies"
            subtitle="A sample of what I've shipped, researched, and prototyped."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-orange-600 hover:text-orange-500 font-medium shrink-0 transition-colors">
            View all work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => {
            if (item.type === 'project') {
              return <ProjectCard key={item.id} project={item} />;
            }
            if (item.type === 'case-study') {
              return <CaseStudyCard key={item.id} caseStudy={item} />;
            }
            return <PrototypeCard key={item.id} prototype={item} />;
          })}
        </div>

        {/* Browse by type */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {[
            {label: 'All Projects', href: '/projects'},
            {label: 'All Case Studies', href: '/case-studies'},
            {label: 'All Prototypes', href: '/prototypes'},
          ].map(({label, href}) => (
            <Link
              key={href}
              href={href}
              className="flex items-center justify-between px-5 py-4 bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 rounded-xl hover:border-orange-400/50 hover:bg-amber-100/60 dark:hover:bg-slate-700/60 transition-all duration-200 group">
              <span className="text-sm font-medium text-stone-700 dark:text-slate-300 group-hover:text-stone-900 dark:group-hover:text-white">
                {label}
              </span>
              <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
