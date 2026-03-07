import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight, FileText, Github, Linkedin, Mail, ChevronDown} from 'lucide-react';
import GradientBadge from '@/components/ui/GradientBadge';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(234,88,12,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <GradientBadge>
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Software Engineer → Product Manager
            </GradientBadge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-slate-100 leading-tight">
              Building products at the{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(to right, #ea580c, #d97706)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                intersection
              </span>{' '}
              of tech & users
            </h1>

            <p className="text-xl sm:text-2xl text-stone-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              I&apos;m{' '}
              <span className="text-stone-800 dark:text-slate-200 font-semibold">Paresh Salunke</span> — a Senior Product
              Manager who writes code. I turn complex technical problems into products people love.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 hover:bg-stone-800 dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-stone-900/20">
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-amber-300 dark:border-slate-700 hover:border-amber-400 dark:hover:border-slate-500 text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-slate-100 font-semibold rounded-xl transition-all duration-200">
                Read Case Studies
              </Link>
              <a
                href="/Resume-PareshSalunke.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-amber-300 dark:border-slate-700 hover:border-amber-400 dark:hover:border-slate-500 text-stone-700 dark:text-slate-300 hover:text-stone-900 dark:hover:text-slate-100 font-semibold rounded-xl transition-all duration-200">
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 dark:text-slate-500 hover:text-orange-600 dark:hover:text-slate-300 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 dark:text-slate-500 hover:text-orange-600 dark:hover:text-slate-300 transition-colors"
                aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:pareshsalunke@gmail.com"
                className="text-stone-500 dark:text-slate-500 hover:text-orange-600 dark:hover:text-slate-300 transition-colors"
                aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden ring-4 ring-amber-200 dark:ring-slate-700 shadow-2xl">
              <Image
                src="/projects/paresh-headshot.jpg"
                alt="Paresh Salunke"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="mt-12 text-stone-500 dark:text-slate-600 hover:text-orange-600 dark:hover:text-slate-400 transition-colors animate-bounce"
        aria-label="Scroll down">
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
