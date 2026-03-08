'use client';

import { useState, useEffect } from 'react';
import { Lang, tr } from '@/lib/i18n';
import LanguageToggle from '@/components/ui/LanguageToggle';
import GlassCard from '@/components/ui/GlassCard';
import CTAButton from '@/components/ui/CTAButton';

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0f0f1a',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Language toggle */}
      <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 100 }}>
        <LanguageToggle lang={lang} onToggle={setLang} />
      </div>

      {/* Hero */}
      <section
        style={{
          padding: '80px 20px 48px',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #0f0f1a 0%, #0a0a15 100%)',
        }}
      >
        {/* Logo mark */}
        <div style={{ fontSize: 48, marginBottom: 16 }}>🏍️</div>

        <h1
          style={{
            fontSize: 'clamp(26px, 6vw, 44px)',
            fontWeight: 800,
            color: '#e8e8f0',
            lineHeight: 1.2,
            marginBottom: 16,
            maxWidth: 600,
            margin: '0 auto 16px',
          }}
        >
          {tr('landingTitle', lang)}
        </h1>
        <p
          style={{
            fontSize: 'clamp(14px, 3vw, 17px)',
            color: '#a0a0b8',
            maxWidth: 480,
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}
        >
          {tr('landingSubtitle', lang)}
        </p>
      </section>

      {/* Shop cards */}
      <section style={{ padding: '0 20px 32px', maxWidth: 700, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Dynamik */}
          <GlassCard style={{ overflow: 'hidden' }}>
            <div
              style={{
                height: 4,
                background: '#2563eb',
                borderRadius: '12px 12px 0 0',
              }}
            />
            <div style={{ padding: '24px 24px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: '#2563eb15',
                    border: '1px solid #2563eb30',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    flexShrink: 0,
                  }}
                >
                  🔧
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2563eb', marginBottom: 4 }}>
                    {lang === 'fr' ? 'Réparation · Vente Vespa' : 'Repair · Vespa Sales'}
                  </p>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: '#e8e8f0', marginBottom: 4 }}>
                    Dynamik Performance
                  </h2>
                  <p style={{ fontSize: 13, color: '#a0a0b8', marginBottom: 4 }}>
                    {lang === 'fr' ? 'Réparation moto experte depuis 1999' : 'Expert motorcycle repair since 1999'}
                  </p>
                  <p style={{ fontSize: 12, color: '#6b6b80' }}>
                    144 Ch. Freeman, Gatineau · 819-772-9444
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <CTAButton href="/dynamik" accentColor="#2563eb" fullWidth>
                  {tr('visitDynamik', lang)} →
                </CTAButton>
              </div>
            </div>
          </GlassCard>

          {/* Radikal */}
          <GlassCard style={{ overflow: 'hidden' }}>
            <div
              style={{
                height: 4,
                background: '#D4AF37',
                borderRadius: '12px 12px 0 0',
              }}
            />
            <div style={{ padding: '24px 24px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: '#D4AF3715',
                    border: '1px solid #D4AF3730',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    flexShrink: 0,
                  }}
                >
                  🏍️
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 4 }}>
                    {lang === 'fr' ? 'Pièces · Boutique · Powersports' : 'Parts · Boutique · Powersports'}
                  </p>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: '#e8e8f0', marginBottom: 4 }}>
                    Radikal Motosport
                  </h2>
                  <p style={{ fontSize: 13, color: '#a0a0b8', marginBottom: 4 }}>
                    {lang === 'fr' ? 'L\'autorité powersports de Gatineau' : 'Gatineau\'s Powersports Authority'}
                  </p>
                  <p style={{ fontSize: 12, color: '#6b6b80' }}>
                    156 De Varennes, Gatineau · 819-561-6686
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <CTAButton href="/radikal" accentColor="#D4AF37" fullWidth>
                  {tr('visitRadikal', lang)} →
                </CTAButton>
              </div>
            </div>
          </GlassCard>

          {/* Exam Prep */}
          <GlassCard style={{ overflow: 'hidden' }}>
            <div
              style={{
                height: 4,
                background: 'linear-gradient(90deg, #16a34a, #0d9488)',
                borderRadius: '12px 12px 0 0',
              }}
            />
            <div style={{ padding: '24px 24px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap' }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: '#16a34a15',
                    border: '1px solid #16a34a30',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    flexShrink: 0,
                  }}
                >
                  📋
                </div>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#16a34a', marginBottom: 4 }}>
                    {lang === 'fr' ? 'Quiz · QC (SAAQ) · ON (M1/M2/M) · Audio' : 'Quiz · QC (SAAQ) · ON (M1/M2/M) · Audio'}
                  </p>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: '#e8e8f0', marginBottom: 4 }}>
                    {lang === 'fr' ? 'Préparation à l\'examen moto' : 'Motorcycle Exam Prep'}
                  </h2>
                  <p style={{ fontSize: 13, color: '#a0a0b8' }}>
                    {tr('examCard', lang)}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <CTAButton href="/exam" accentColor="#16a34a" fullWidth>
                  {tr('startExam', lang)} →
                </CTAButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: 'auto',
          padding: '24px 20px',
          textAlign: 'center',
          borderTop: '1px solid #1e1e35',
        }}
      >
        <p style={{ fontSize: 12, color: '#3a3a50' }}>
          © 2026 Possibilities IN MIND™ · Gatineau, QC
        </p>
      </footer>
    </div>
  );
}
