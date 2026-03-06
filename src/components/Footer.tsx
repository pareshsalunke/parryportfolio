import Link from 'next/link';
import {Github, Linkedin, Mail} from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-amber-200/60 dark:border-slate-700/60 bg-amber-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / name */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-stone-900 dark:bg-orange-600 flex items-center justify-center text-white text-xs font-bold">
              PS
            </div>
            <p className="text-sm text-stone-600 dark:text-slate-300">
              Paresh Salunke &mdash; Product Manager
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-4 text-xs text-stone-600">
            <Link href="/projects" className="hover:text-stone-700 dark:hover:text-slate-300 transition-colors">
              Projects
            </Link>
            <Link href="/case-studies" className="hover:text-stone-700 dark:hover:text-slate-300 transition-colors">
              Case Studies
            </Link>
            <Link href="/prototypes" className="hover:text-stone-700 dark:hover:text-slate-300 transition-colors">
              Prototypes
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 dark:text-slate-600 hover:text-stone-700 dark:hover:text-slate-400 transition-colors"
              aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 dark:text-slate-600 hover:text-stone-700 dark:hover:text-slate-400 transition-colors"
              aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:pareshsalunke@gmail.com"
              className="text-stone-500 dark:text-slate-600 hover:text-stone-700 dark:hover:text-slate-400 transition-colors"
              aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone-500 dark:text-slate-700">
          © {year} Paresh Salunke. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
