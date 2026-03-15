'use client';

// /dynamik/review — Google Review redirect + printable QR landing page
// Steve puts a QR code on his counter linking here.
// Page auto-redirects to Google Maps review in 3s, shows instructions meanwhile.

import { useState, useEffect } from 'react';
import { Lang } from '@/lib/i18n';
import Link from 'next/link';

// Replace with actual Google Maps Place ID once confirmed
const GOOGLE_REVIEW_URL = 'https://g.page/r/dynamik-performance-gatineau/review';
const SHOP_NAME = 'Dynamik Performance';
const SHOP_PHONE = '819-772-9444';
const ACCENT = '#2563eb';
const SERIF = 'var(--font-cormorant), Georgia, serif';

export default function DynamikReviewPage() {
  const [lang, setLang] = useState<Lang>('fr');
  const [countdown, setCountdown] = useState(4);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      setRedirected(true);
      window.location.href = GOOGLE_REVIEW_URL;
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const steps = lang === 'fr'
    ? [
        'Cliquez sur les étoiles (on espère 5 ⭐)',
        'Décrivez votre expérience en quelques mots',
        'Cliquez "Publier" — ça prend 30 secondes !',
      ]
    : [
        'Click on the stars (we hope for 5 ⭐)',
        'Describe your experience in a few words',
        'Click "Post" — it takes 30 seconds!',
      ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
      }}
    >
      {/* Lang toggle */}
      <button
        onClick={() => handleLangToggle(lang === 'fr' ? 'en' : 'fr')}
        style={{ position: 'fixed', top: 16, right: 16, fontSize: 12, fontWeight: 700, background: 'none', border: '1px solid #e8e3d8', borderRadius: 100, padding: '6px 14px', cursor: 'pointer', color: '#555' }}
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>

      <div style={{ maxWidth: 480, width: '100%', textAlign: 'center' }}>
        {/* Stars */}
        <div style={{ fontSize: 48, marginBottom: 8, letterSpacing: 4 }}>⭐⭐⭐⭐⭐</div>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
          {lang === 'fr' ? 'VOTRE AVIS COMPTE' : 'YOUR REVIEW MATTERS'}
        </p>

        <h1
          style={{
            fontSize: 'clamp(26px, 5vw, 42px)',
            fontWeight: 300,
            color: '#0a0a0a',
            fontFamily: SERIF,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 14,
          }}
        >
          {lang === 'fr'
            ? `Votre expérience chez\n${SHOP_NAME} ?`
            : `How was your experience\nat ${SHOP_NAME}?`}
        </h1>

        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65, marginBottom: 28 }}>
          {lang === 'fr'
            ? 'Un avis Google prend 30 secondes et aide Steve à se faire connaître davantage. Merci !'
            : 'A Google review takes 30 seconds and helps Steve grow his business. Thank you!'}
        </p>

        {/* CTA button */}
        <a
          href={GOOGLE_REVIEW_URL}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: ACCENT,
            color: '#fff',
            padding: '16px 36px',
            borderRadius: 100,
            fontSize: 16,
            fontWeight: 700,
            textDecoration: 'none',
            marginBottom: 20,
          }}
        >
          <span style={{ fontSize: 20 }}>⭐</span>
          {lang === 'fr' ? 'Laisser un avis Google' : 'Leave a Google review'}
        </a>

        {/* Auto-redirect countdown */}
        {!redirected && (
          <p style={{ fontSize: 12, color: '#bbb', marginBottom: 28 }}>
            {lang === 'fr'
              ? `Redirection automatique dans ${countdown}s...`
              : `Auto-redirecting in ${countdown}s...`}
          </p>
        )}

        {/* Steps */}
        <div style={{ background: '#f5f4f0', borderRadius: 12, padding: '20px 24px', marginBottom: 24, textAlign: 'left' }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            {lang === 'fr' ? 'Comment laisser un avis :' : 'How to leave a review:'}
          </p>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: i < steps.length - 1 ? 10 : 0 }}>
              <span style={{ width: 22, height: 22, background: ACCENT, color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0, marginTop: 1 }}>
                {i + 1}
              </span>
              <p style={{ fontSize: 13, color: '#555', lineHeight: 1.5, margin: 0 }}>{s}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`tel:${SHOP_PHONE.replace(/\D/g, '')}`} style={{ fontSize: 13, color: '#888', textDecoration: 'none' }}>
            📞 {SHOP_PHONE}
          </a>
          <span style={{ color: '#ddd' }}>·</span>
          <Link href="/dynamik" style={{ fontSize: 13, color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
            {lang === 'fr' ? 'Retour au site' : 'Back to website'} →
          </Link>
        </div>
      </div>
    </div>
  );
}
