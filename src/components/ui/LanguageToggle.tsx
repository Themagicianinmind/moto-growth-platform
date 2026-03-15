'use client';

import { useCallback } from 'react';
import { Lang } from '@/lib/i18n';

interface LanguageToggleProps {
  lang: Lang;
  onToggle: (lang: Lang) => void;
  /** 'light' = white luxury nav (default), 'dark' = exam app navy */
  theme?: 'light' | 'dark';
}

export default function LanguageToggle({ lang, onToggle, theme = 'light' }: LanguageToggleProps) {
  const handleToggle = useCallback(() => {
    const next: Lang = lang === 'fr' ? 'en' : 'fr';
    onToggle(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('moto-lang', next);
    }
  }, [lang, onToggle]);

  const isDark = theme === 'dark';

  return (
    <button
      onClick={handleToggle}
      title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
      style={{
        background: isDark ? '#D4AF3715' : 'transparent',
        border: isDark ? '1px solid #D4AF3780' : '1px solid #ccc',
        borderRadius: 100,
        padding: '4px 14px',
        color: isDark ? '#D4AF37' : '#555',
        fontWeight: 700,
        fontSize: 12,
        cursor: 'pointer',
        fontFamily: 'inherit',
        letterSpacing: '0.08em',
        transition: 'all 0.15s',
        minHeight: 28,
      }}
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  );
}
