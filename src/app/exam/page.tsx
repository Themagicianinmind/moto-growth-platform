'use client';

import { useState, useEffect } from 'react';
import { Province, questions } from '@/lib/exam-data';
import { Lang, tr } from '@/lib/i18n';
import { preloadVoices } from '@/lib/speech';
import LanguageToggle from '@/components/ui/LanguageToggle';
import CTAButton from '@/components/ui/CTAButton';
import ProvinceSelector from '@/components/exam/ProvinceSelector';
import QuizEngine from '@/components/exam/QuizEngine';
import ScoreDisplay from '@/components/exam/ScoreDisplay';
import GearChecklist from '@/components/exam/GearChecklist';
import LicensingSteps from '@/components/exam/LicensingSteps';
import LeadCapture from '@/components/exam/LeadCapture';

type ExamView = 'province' | 'quiz' | 'score' | 'learn';

interface QuizResult {
  correct: number;
  total: number;
  weakCategories: string[];
}

export default function ExamPage() {
  const [lang, setLang] = useState<Lang>('fr');
  const [province, setProvince] = useState<Province | null>(null);
  const [view, setView] = useState<ExamView>('province');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    // Restore language preference
    const savedLang = localStorage.getItem('moto-lang') as Lang | null;
    if (savedLang === 'en') setLang('en');

    // Restore audio preference
    const savedAudio = localStorage.getItem('moto-audio');
    if (savedAudio === 'false') setAudioEnabled(false);

    // Preload voices async (Web Speech API)
    preloadVoices();
  }, []);

  const handleAudioToggle = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    localStorage.setItem('moto-audio', String(next));
  };

  const handleProvinceSelect = (p: Province) => {
    setProvince(p);
    setView('quiz');
  };

  const handleQuizComplete = (res: QuizResult) => {
    setResult(res);
    setView('score');
  };

  const handleRestart = () => {
    setResult(null);
    setView('province');
    setProvince(null);
  };

  const filteredQuestions = province ? questions.filter((q) => q.province === province) : [];

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a' }}>
      {/* Top bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: '#0f0f1acc',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #1e1e35',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {/* Back + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="/"
            style={{ fontSize: 13, color: '#6b6b80', textDecoration: 'none', fontWeight: 600 }}
          >
            ←
          </a>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#e8e8f0' }}>
            {lang === 'fr' ? '🏍️ Exam moto' : '🏍️ Moto Exam'}
          </span>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {/* Audio toggle */}
          <button
            onClick={handleAudioToggle}
            style={{
              background: audioEnabled ? '#D4AF3715' : '#1e1e35',
              border: `1px solid ${audioEnabled ? '#D4AF3780' : '#2a2a40'}`,
              borderRadius: 8,
              padding: '6px 12px',
              color: audioEnabled ? '#D4AF37' : '#6b6b80',
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {audioEnabled ? tr('audioOn', lang) : tr('audioOff', lang)}
          </button>
          <LanguageToggle lang={lang} onToggle={setLang} />
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          padding: '40px 20px 24px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #0a1628 0%, #0f0f1a 100%)',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(22px, 5vw, 36px)',
            fontWeight: 800,
            color: '#e8e8f0',
            marginBottom: 8,
          }}
        >
          {tr('examTitle', lang)}
        </h1>
        <p style={{ fontSize: 13, color: '#a0a0b8', marginBottom: 12 }}>
          {tr('examSubtitle', lang)}
        </p>
        {/* Disclaimer */}
        <p
          style={{
            fontSize: 11,
            color: '#3a3a50',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          ⚠️ {tr('examDisclaimer', lang)}
        </p>
      </section>

      {/* Main content */}
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {view === 'province' && (
          <>
            <ProvinceSelector lang={lang} onSelect={handleProvinceSelect} />

            {/* Learn section below province select */}
            <section style={{ padding: '24px 20px' }}>
              <CTAButton
                onClick={() => setView('learn')}
                variant="secondary"
                accentColor="#0d9488"
                fullWidth
              >
                📚 {lang === 'fr' ? 'Voir l\'équipement et les étapes de permis' : 'View Gear & Licensing Steps'}
              </CTAButton>
            </section>
          </>
        )}

        {view === 'quiz' && province && (
          <QuizEngine
            questions={filteredQuestions}
            lang={lang}
            audioEnabled={audioEnabled}
            onComplete={handleQuizComplete}
          />
        )}

        {view === 'score' && result && (
          <>
            <ScoreDisplay
              correct={result.correct}
              total={result.total}
              weakCategories={result.weakCategories}
              lang={lang}
              onRestart={handleRestart}
            />
            <LeadCapture lang={lang} />
          </>
        )}

        {view === 'learn' && province && (
          <>
            <GearChecklist lang={lang} audioEnabled={audioEnabled} />
            <LicensingSteps province={province} lang={lang} audioEnabled={audioEnabled} />
            <section style={{ padding: '24px 20px' }}>
              <CTAButton
                onClick={() => setView('quiz')}
                accentColor="#16a34a"
                fullWidth
              >
                ✏️ {tr('startQuiz', lang)}
              </CTAButton>
            </section>
          </>
        )}

        {view === 'learn' && !province && (
          <>
            <ProvinceSelector lang={lang} onSelect={(p) => { setProvince(p); }} />
            <GearChecklist lang={lang} audioEnabled={audioEnabled} />
          </>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: '32px 20px',
          textAlign: 'center',
          borderTop: '1px solid #1e1e35',
          marginTop: 48,
        }}
      >
        <p style={{ fontSize: 12, color: '#3a3a50' }}>
          © 2026 Possibilities IN MIND™ · {tr('examDisclaimer', lang)}
        </p>
      </footer>
    </div>
  );
}
