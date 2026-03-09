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

  // Extract founding year from tagline for "Since" badge
  const sinceYear = shop.taglineFr.match(/\d{4}/)?.[0] ?? null;
  const yearsInBusiness = sinceYear ? new Date().getFullYear() - parseInt(sinceYear) : null;

  return (
    <section
      id="hero"
      style={{
        background: `linear-gradient(155deg, #07070f 0%, ${shop.accentColor}1a 50%, #0f0f1a 100%)`,
        padding: 'clamp(88px, 14vw, 120px) 20px 64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow behind content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${shop.accentColor}0a 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Trust + years badges */}
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
              background: `${shop.accentColor}15`,
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
              background: '#1e1e3580',
              border: '1px solid #2a2a45',
              borderRadius: 20,
              padding: '4px 14px',
              fontSize: 12,
              fontWeight: 700,
              color: '#a0a0b8',
            }}
          >
            {lang === 'fr' ? `${yearsInBusiness} ans de confiance` : `${yearsInBusiness} years trusted`}
          </span>
        )}
      </div>

      {/* Shop name */}
      <h1
        style={{
          fontSize: 'clamp(30px, 8vw, 54px)',
          fontWeight: 900,
          color: '#f0f0fc',
          marginBottom: 14,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          position: 'relative',
        }}
      >
        {name}
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: 'clamp(15px, 3.5vw, 20px)',
          color: '#a0a0b8',
          maxWidth: 520,
          margin: '0 auto 16px',
          lineHeight: 1.5,
          position: 'relative',
        }}
      >
        {tagline}
      </p>

      {/* 5-star rating row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 36,
          position: 'relative',
        }}
      >
        <span style={{ color: '#D4AF37', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
        <span style={{ fontSize: 13, color: '#6b6b80', fontWeight: 600 }}>
          {lang === 'fr' ? '5.0 · Google' : '5.0 · Google'}
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
        <CTAButton variant="outline" fullWidth href={shop.mapsUrl}>
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
          marginTop: 28,
          position: 'relative',
        }}
      >
        <span style={{ fontSize: 12, color: '#6b6b80' }}>📍 {shop.address}</span>
        <span style={{ fontSize: 12, color: '#6b6b80' }}>
          🕐 {lang === 'fr' ? 'Lun–Ven 8h–17h · Sam 9h–14h' : 'Mon–Fri 8am–5pm · Sat 9am–2pm'}
        </span>
      </div>
    </section>
  );
}
