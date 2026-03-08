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

  return (
    <section
      style={{
        background: `linear-gradient(135deg, #0f0f1a 0%, ${shop.accentColor}12 100%)`,
        padding: '60px 20px 48px',
        textAlign: 'center',
      }}
    >
      {/* Trust badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 24,
        }}
      >
        {shop.trust.map((badge) => (
          <span
            key={badge}
            style={{
              background: `${shop.accentColor}15`,
              border: `1px solid ${shop.accentColor}40`,
              borderRadius: 20,
              padding: '4px 12px',
              fontSize: 12,
              fontWeight: 600,
              color: shop.accentColor,
            }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Shop name */}
      <h1
        style={{
          fontSize: 'clamp(28px, 7vw, 48px)',
          fontWeight: 800,
          color: '#e8e8f0',
          marginBottom: 12,
          lineHeight: 1.1,
        }}
      >
        {name}
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontSize: 'clamp(15px, 3.5vw, 20px)',
          color: '#a0a0b8',
          marginBottom: 32,
          maxWidth: 480,
          margin: '0 auto 32px',
        }}
      >
        {tagline}
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          maxWidth: 320,
          margin: '0 auto',
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

      {/* Address */}
      <p style={{ color: '#6b6b80', fontSize: 13, marginTop: 24 }}>
        {shop.address}
      </p>
    </section>
  );
}
