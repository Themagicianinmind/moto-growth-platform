'use client';

import { useCallback } from 'react';
import { Lang } from '@/lib/i18n';

interface LanguageToggleProps {
  lang: Lang;
  onToggle: (lang: Lang) => void;
}

export default function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  const handleToggle = useCallback(() => {
    const next: Lang = lang === 'fr' ? 'en' : 'fr';
    onToggle(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('moto-lang', next);
    }
  }, [lang, onToggle]);

  return (
    <button
      onClick={handleToggle}
      title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
      style={{
        background: '#D4AF3715',
        border: '1px solid #D4AF3780',
        borderRadius: 8,
        padding: '6px 14px',
        color: '#D4AF37',
        fontWeight: 700,
        fontSize: 13,
        cursor: 'pointer',
        fontFamily: 'inherit',
        letterSpacing: '0.05em',
      }}
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
