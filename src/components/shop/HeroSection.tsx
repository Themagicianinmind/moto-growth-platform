import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import CTAButton from '@/components/ui/CTAButton';

interface HeroSectionProps {
  shop: Shop;
  lang: Lang;
}

export default function HeroSection({ shop, lang }: HeroSectionProps) {
  const name = lang === 'fr' ? shop.nameFr : shop.nameEn;
  const tagline = lang === 'fr' ? shop.taglineFr : shop.taglineEn;

  const sinceYear = shop.taglineFr.match(/\d{4}/)?.[0] ?? null;
  const yearsInBusiness = sinceYear ? new Date().getFullYear() - parseInt(sinceYear) : null;

  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(160deg, #f5f4f0 0%, #fafaf8 60%, #f0ede6 100%)',
        padding: 'clamp(88px, 14vw, 120px) 20px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm radial wash */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${shop.accentColor}0d 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Trust badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 28,
          position: 'relative',
        }}
      >
        {shop.trust.map((badge) => (
          <span
            key={badge}
            style={{
              background: `${shop.accentColor}10`,
              border: `1px solid ${shop.accentColor}40`,
              borderRadius: 20,
              padding: '4px 14px',
              fontSize: 12,
              fontWeight: 700,
              color: shop.accentColor,
              letterSpacing: '0.01em',
            }}
          >
            {badge}
          </span>
        ))}
        {yearsInBusiness && (
          <span
            style={{
              background: '#f0ede6',
              border: '1px solid #ddd8cc',
              borderRadius: 20,
              padding: '4px 14px',
              fontSize: 12,
              fontWeight: 700,
              color: '#888',
            }}
          >
            {lang === 'fr' ? `${yearsInBusiness} ans de confiance` : `${yearsInBusiness} years trusted`}
          </span>
        )}
      </div>

      {/* Shop name — Cormorant Garamond serif */}
      <h1
        style={{
          fontSize: 'clamp(36px, 9vw, 64px)',
          fontWeight: 300,
          color: '#0a0a0a',
          marginBottom: 16,
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          position: 'relative',
        }}
      >
        {name}
      </h1>

      {/* Accent rule */}
      <div
        style={{
          width: 48,
          height: 1,
          background: shop.accentColor,
          margin: '0 auto 20px',
          position: 'relative',
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontSize: 'clamp(14px, 3vw, 18px)',
          color: '#555',
          maxWidth: 480,
          margin: '0 auto 16px',
          lineHeight: 1.6,
          position: 'relative',
          letterSpacing: '0.01em',
        }}
      >
        {tagline}
      </p>

      {/* 5-star rating */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 40,
          position: 'relative',
        }}
      >
        <span style={{ color: '#9e8a5a', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
        <span style={{ fontSize: 13, color: '#888', fontWeight: 600 }}>
          5.0 · Google
        </span>
      </div>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          maxWidth: 340,
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <CTAButton
          href={`tel:${shop.phone.replace(/-/g, '')}`}
          accentColor={shop.accentColor}
          fullWidth
        >
          📞 {tr('callNow', lang)} — {shop.phone}
        </CTAButton>
        <CTAButton variant="secondary" accentColor={shop.accentColor} fullWidth href="#booking">
          📅 {tr('bookService', lang)}
        </CTAButton>
        <CTAButton
          variant="outline"
          fullWidth
          href={shop.mapsUrl}
          style={{ border: '1px solid #ccc', color: '#555' }}
        >
          📍 {tr('getDirections', lang)}
        </CTAButton>
      </div>

      {/* Address + hours strip */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4px 24px',
          marginTop: 32,
          position: 'relative',
        }}
      >
        <span style={{ fontSize: 12, color: '#888' }}>📍 {shop.address}</span>
        <span style={{ fontSize: 12, color: '#888' }}>
          🕐 {lang === 'fr' ? 'Lun–Ven 8h–17h · Sam 9h–14h' : 'Mon–Fri 8am–5pm · Sat 9am–2pm'}
        </span>
      </div>
    </section>
  );
}
