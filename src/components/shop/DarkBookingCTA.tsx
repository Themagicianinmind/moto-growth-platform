import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';

interface DarkBookingCTAProps {
  shop: Shop;
  lang: Lang;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

export default function DarkBookingCTA({ shop, lang }: DarkBookingCTAProps) {
  const ACCENT = shop.accentColor;

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0f1a2e 100%)',
        padding: '72px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: 640, margin: '0 auto' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
          {tr('darkCTALabel', lang)}
        </p>
        <h2
          style={{
            fontSize: 'clamp(32px, 6vw, 52px)',
            fontWeight: 300,
            color: '#ffffff',
            fontFamily: SERIF,
            letterSpacing: '-0.01em',
            marginBottom: 14,
            lineHeight: 1.1,
          }}
        >
          {tr('darkCTAHeading', lang)}
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 36, lineHeight: 1.6 }}>
          {tr('darkCTASubtitle', lang)}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a
            href={`tel:${shop.phone.replace(/-/g, '')}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: ACCENT,
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            📞 {tr('darkCTACall', lang)} — {shop.phone}
          </a>
          <a
            href="#booking"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              border: `1px solid ${ACCENT}60`,
              color: ACCENT,
              padding: '14px 32px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            {tr('darkCTABook', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
