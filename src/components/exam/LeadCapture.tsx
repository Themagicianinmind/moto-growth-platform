'use client';

import { useState, FormEvent } from 'react';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';
import CTAButton from '@/components/ui/CTAButton';

interface LeadCaptureProps {
  lang: Lang;
}

export default function LeadCapture({ lang }: LeadCaptureProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    // Phase 1: localStorage (Phase 2: Supabase + Resend)
    const leads = JSON.parse(localStorage.getItem('moto-leads') ?? '[]');
    leads.push({ email, lang, timestamp: new Date().toISOString(), source: 'exam-lead-capture' });
    localStorage.setItem('moto-leads', JSON.stringify(leads));
    setSubmitted(true);
  };

  return (
    <section
      style={{
        padding: '48px 20px',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #D4AF3708 100%)',
      }}
    >
      <SectionHeader
        label={tr('leadLabel', lang)}
        heading={tr('leadHeading', lang)}
        accentColor="#D4AF37"
      />

      <GlassCard
        style={{
          padding: 28,
          border: '1px solid #D4AF3730',
          maxWidth: 480,
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🎉</div>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#e8e8f0', marginBottom: 8 }}>
              {tr('leadSuccess', lang)}
            </p>
            <p style={{ fontSize: 13, color: '#6b6b80' }}>{tr('leadAt', lang)}</p>

            <div style={{ marginTop: 20 }}>
              <a
                href="/radikal"
                style={{
                  display: 'inline-block',
                  background: '#D4AF37',
                  color: '#1a1a2e',
                  padding: '10px 24px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 800,
                  textDecoration: 'none',
                }}
              >
                {lang === 'fr' ? 'Visiter Radikal Motosport →' : 'Visit Radikal Motosport →'}
              </a>
            </div>
          </div>
        ) : (
          <>
            <p style={{ fontSize: 14, color: '#a0a0b8', lineHeight: 1.6, marginBottom: 20 }}>
              {tr('leadBody', lang)}
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={tr('leadEmail', lang)}
                style={{
                  width: '100%',
                  background: '#0f0f1a',
                  border: '1px solid #1e1e35',
                  borderRadius: 8,
                  padding: '10px 14px',
                  color: '#e8e8f0',
                  fontSize: 14,
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                  outline: 'none',
                }}
              />
              <CTAButton accentColor="#D4AF37" fullWidth>
                🎁 {tr('leadSubmit', lang)}
              </CTAButton>
            </form>
            <p style={{ fontSize: 11, color: '#3a3a50', marginTop: 12, textAlign: 'center' }}>
              {lang === 'fr' ? 'Chez Radikal Motosport · 156 De Varennes, Gatineau' : 'At Radikal Motosport · 156 De Varennes, Gatineau'}
            </p>
          </>
        )}
      </GlassCard>
    </section>
  );
}
