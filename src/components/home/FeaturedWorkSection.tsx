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
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects & case studies"
            subtitle="A sample of what I've shipped, researched, and prototyped."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium shrink-0 transition-colors">
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
            {label: 'All Projects', href: '/projects', color: 'blue'},
            {label: 'All Case Studies', href: '/case-studies', color: 'violet'},
            {label: 'All Prototypes', href: '/prototypes', color: 'emerald'},
          ].map(({label, href, color}) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center justify-between px-5 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-${color}-500/40 transition-all duration-200 group`}>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">
                {label}
              </span>
              <ArrowRight className={`w-4 h-4 text-${color}-400 group-hover:translate-x-1 transition-transform`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
