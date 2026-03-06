'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, X, Sun, Moon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {useTheme} from '@/components/ThemeProvider';

const navLinks = [
  {label: 'Projects', href: '/projects'},
  {label: 'Case Studies', href: '/case-studies'},
  {label: 'Prototypes', href: '/prototypes'},
  {label: 'About', href: '/#about'},
  {label: 'Contact', href: '/#contact'},
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const {theme, toggleTheme} = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/60 bg-stone-50/80 dark:border-slate-700/60 dark:bg-slate-900/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
            PS
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-stone-900 dark:text-slate-100 leading-tight">Paresh Salunke</p>
            <p className="text-xs text-stone-500 leading-tight">Product Manager</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const isActive =
              link.href !== '/#about' &&
              link.href !== '/#contact' &&
              pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                    : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60',
                )}>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200/60 dark:border-slate-700/60 bg-stone-50/95 dark:bg-slate-900/95 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
