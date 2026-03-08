'use client';

import { useState } from 'react';
import { Question } from '@/lib/exam-data';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import CTAButton from '@/components/ui/CTAButton';
import AudioButton from '@/components/ui/AudioButton';

interface QuizEngineProps {
  questions: Question[];
  lang: Lang;
  audioEnabled: boolean;
  onComplete: (results: { correct: number; total: number; weakCategories: string[] }) => void;
}

export default function QuizEngine({ questions, lang, audioEnabled, onComplete }: QuizEngineProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCategories, setWrongCategories] = useState<string[]>([]);

  const q = questions[currentIdx];
  const isLast = currentIdx === questions.length - 1;

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setSelectedIdx(idx);
    setAnswered(true);
    if (idx === q.answer) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrongCategories((prev) => [...prev, q.category]);
    }
  };

  const handleNext = () => {
    if (isLast) {
      const uniqueWeak = Array.from(new Set(wrongCategories));
      onComplete({
        correct: correctCount + (selectedIdx === q.answer ? 1 : 0),
        total: questions.length,
        weakCategories: uniqueWeak,
      });
    } else {
      setCurrentIdx((i) => i + 1);
      setSelectedIdx(null);
      setAnswered(false);
    }
  };

  const questionText = lang === 'fr' ? q.q : q.qEN;
  const [expFr, expEn] = q.explanation.split(' / ');
  const explanationText = lang === 'fr' ? (expFr ?? q.explanation) : (expEn ?? q.explanation);

  return (
    <section style={{ padding: '24px 20px' }}>
      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 12, color: '#6b6b80', fontWeight: 600 }}>
            {tr('question', lang)} {currentIdx + 1} {tr('of', lang)} {questions.length}
          </span>
          <span style={{ fontSize: 12, color: '#6b6b80' }}>
            {Math.round(((currentIdx) / questions.length) * 100)}%
          </span>
        </div>
        <div style={{ height: 4, background: '#1e1e35', borderRadius: 2 }}>
          <div
            style={{
              height: '100%',
              width: `${((currentIdx) / questions.length) * 100}%`,
              background: '#16a34a',
              borderRadius: 2,
              transition: 'width 0.3s',
            }}
          />
        </div>
      </div>

      <GlassCard style={{ padding: 24 }}>
        {/* Question */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 20 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#e8e8f0', lineHeight: 1.5, flex: 1 }}>
            {questionText}
          </p>
          {audioEnabled && (
            <AudioButton text={questionText} lang={lang} size="sm" />
          )}
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {q.options.map((opt, i) => {
            const optText = lang === 'fr' ? opt : q.optionsEN[i];
            let bg = '#0f0f1a';
            let border = '#1e1e35';
            let color = '#a0a0b8';

            if (answered) {
              if (i === q.answer) {
                bg = '#16a34a15';
                border = '#16a34a80';
                color = '#16a34a';
              } else if (i === selectedIdx && selectedIdx !== q.answer) {
                bg = '#dc262615';
                border = '#dc262680';
                color = '#dc2626';
              }
            } else if (selectedIdx === i) {
              bg = '#D4AF3715';
              border = '#D4AF3780';
              color = '#D4AF37';
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={answered}
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: 8,
                  padding: '12px 16px',
                  textAlign: 'left',
                  cursor: answered ? 'default' : 'pointer',
                  color,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  transition: 'all 0.15s',
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: `${border}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {optText}
              </button>
            );
          })}
        </div>

        {/* Explanation (after answering) */}
        {answered && (
          <div
            style={{
              background: selectedIdx === q.answer ? '#16a34a10' : '#dc262610',
              border: `1px solid ${selectedIdx === q.answer ? '#16a34a40' : '#dc262640'}`,
              borderRadius: 8,
              padding: 16,
              marginBottom: 20,
            }}
          >
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: selectedIdx === q.answer ? '#16a34a' : '#dc2626', marginBottom: 6 }}>
                  {selectedIdx === q.answer ? tr('correct', lang) : tr('incorrect', lang)}
                </p>
                <p style={{ fontSize: 12, color: '#a0a0b8', lineHeight: 1.6 }}>
                  <strong style={{ color: '#e8e8f0' }}>{tr('explanation', lang)}</strong>{' '}
                  {explanationText}
                </p>
              </div>
              {audioEnabled && (
                <AudioButton text={`${tr('explanation', lang)} ${explanationText}`} lang={lang} size="sm" />
              )}
            </div>
          </div>
        )}

        {/* Next button */}
        {answered && (
          <CTAButton onClick={handleNext} accentColor="#16a34a" fullWidth>
            {isLast
              ? lang === 'fr' ? 'Voir mes résultats →' : 'See my results →'
              : tr('next', lang) + ' →'}
          </CTAButton>
        )}
      </GlassCard>
    </section>
  );
}
