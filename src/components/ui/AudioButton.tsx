'use client';

import { useState, useCallback } from 'react';
import { speak, stop, isSpeaking } from '@/lib/speech';
import { Lang } from '@/lib/i18n';

interface AudioButtonProps {
  text: string;
  lang: Lang;
  size?: 'sm' | 'md';
  label?: string;
}

export default function AudioButton({ text, lang, size = 'sm', label }: AudioButtonProps) {
  const [playing, setPlaying] = useState(false);

  const handleClick = useCallback(() => {
    if (playing) {
      stop();
      setPlaying(false);
    } else {
      setPlaying(true);
      speak(text, lang);
      const checkDone = setInterval(() => {
        if (!isSpeaking()) {
          setPlaying(false);
          clearInterval(checkDone);
        }
      }, 200);
    }
  }, [text, lang, playing]);

  const isSmall = size === 'sm';

  return (
    <button
      onClick={handleClick}
      title={lang === 'fr' ? 'Écouter' : 'Listen'}
      style={{
        background: playing ? '#D4AF3715' : '#161625',
        border: `1px solid ${playing ? '#D4AF3780' : '#1e1e35'}`,
        borderRadius: isSmall ? 8 : 10,
        padding: isSmall ? '6px 10px' : '10px 16px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: playing ? '#D4AF37' : '#a0a0b8',
        fontSize: isSmall ? 12 : 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        transition: 'all 0.2s',
      }}
    >
      {playing ? '⏹️' : '🔊'}
      {label && <span>{label}</span>}
    </button>
  );
}
