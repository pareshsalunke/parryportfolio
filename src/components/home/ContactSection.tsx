import {Mail, Linkedin, Github} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pareshsalunke@gmail.com',
    href: 'mailto:pareshsalunke@gmail.com',
    description: 'Best for project inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pareshsalunke',
    href: 'https://linkedin.com',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/pareshsalunke',
    href: 'https://github.com',
    description: 'See my side projects',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's build something together"
            subtitle="I'm always open to interesting conversations about product, technology, and the space between them."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map(({icon: Icon, label, value, href, description}) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 rounded-2xl hover:border-orange-400/50 hover:bg-amber-50 dark:hover:bg-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-50 dark:bg-slate-700 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 border border-amber-100 dark:border-slate-600 group-hover:border-orange-200 dark:group-hover:border-orange-700/50 transition-all mb-4">
                <Icon className="w-5 h-5 text-stone-600 dark:text-slate-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
              </div>
              <p className="text-sm font-semibold text-stone-800 dark:text-white">
                {label}
              </p>
              <p className="text-xs text-stone-600 mt-1">{description}</p>
              <p className="text-xs text-orange-700 mt-2 truncate max-w-full">
                {value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
