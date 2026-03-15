'use client';

import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';

interface RadikalHeroSectionProps {
  shop: Shop;
  lang: Lang;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

export default function RadikalHeroSection({ shop, lang }: RadikalHeroSectionProps) {
  const ACCENT = shop.accentColor;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 20px 64px',
        overflow: 'hidden',
        background: '#0a0f1e',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/radikal/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.45,
        }}
      />

      {/* Deep gradient overlay — bottom to top */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.5) 50%, rgba(10,15,30,0.15) 100%)',
        }}
      />

      {/* Subtle accent glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '30%',
          left: '10%',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${ACCENT}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', width: '100%' }}>
        {/* Trust badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {shop.trust.map((badge) => (
            <span
              key={badge}
              style={{
                background: `${ACCENT}20`,
                border: `1px solid ${ACCENT}50`,
                borderRadius: 100,
                padding: '4px 14px',
                fontSize: 11,
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: '0.02em',
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Shop name */}
        <h1
          style={{
            fontSize: 'clamp(40px, 9vw, 72px)',
            fontWeight: 300,
            color: '#ffffff',
            fontFamily: SERIF,
            letterSpacing: '-0.01em',
            lineHeight: 1.0,
            marginBottom: 16,
          }}
        >
          {lang === 'fr' ? shop.nameFr : shop.nameEn}
        </h1>

        {/* Gold accent rule */}
        <div style={{ width: 56, height: 2, background: ACCENT, marginBottom: 18 }} />

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(15px, 2.5vw, 20px)',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: 10,
            fontWeight: 300,
            letterSpacing: '0.01em',
            maxWidth: 520,
          }}
        >
          {lang === 'fr' ? shop.taglineFr : shop.taglineEn}
        </p>

        {/* 5-star */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36 }}>
          <span style={{ color: ACCENT, fontSize: 15, letterSpacing: 2 }}>★★★★★</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>5.0 · Google</span>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a
            href="#booking"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: ACCENT,
              color: '#ffffff',
              padding: '14px 30px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            {tr('statsGetQuote', lang)} →
          </a>
          <a
            href={`tel:${shop.phone.replace(/-/g, '')}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              padding: '14px 30px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            📞 {shop.phone}
          </a>
        </div>

        {/* Address bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', marginTop: 24 }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>📍 {shop.address}</span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
            🕐 {lang === 'fr' ? 'Lun–Ven 8h–17h · Sam 9h–14h' : 'Mon–Fri 8am–5pm · Sat 9am–2pm'}
          </span>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          right: 32,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {lang === 'fr' ? 'Défiler' : 'Scroll'}
        </span>
        <div style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${ACCENT}60, transparent)` }} />
      </div>
    </section>
  );
}
