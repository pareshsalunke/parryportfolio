'use client';

import {useEffect, useState} from 'react';
import {ChevronUp} from 'lucide-react';

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    const sections = Array.from(document.querySelectorAll('section'));
    if (sections.length > 1) {
      const currentY = window.scrollY + 80;
      const above = sections.filter(s => s.getBoundingClientRect().top + window.scrollY < currentY);
      if (above.length > 1) {
        above[above.length - 2].scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll up one section"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg flex items-center justify-center transition-colors">
      <ChevronUp className="w-5 h-5 animate-pulse" />
    </button>
  );
}
