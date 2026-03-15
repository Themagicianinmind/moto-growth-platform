import { Lang, tr } from '@/lib/i18n';

interface FoxRacingShowcaseProps {
  lang: Lang;
  accentColor: string;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';
const FOX_ORANGE = '#c2410c';

const features = [
  { icon: '🪖', key: 'foxFeature1' as const },
  { icon: '🧥', key: 'foxFeature2' as const },
  { icon: '🛡️', key: 'foxFeature3' as const },
  { icon: '👢', key: 'foxFeature4' as const },
];

export default function FoxRacingShowcase({ lang, accentColor }: FoxRacingShowcaseProps) {
  void accentColor;
  return (
    <section style={{ padding: '72px 20px', background: '#fafaf8' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'center',
        }}
        className="fox-grid"
      >
        {/* LEFT — image */}
        <div
          style={{
            borderRadius: 14,
            overflow: 'hidden',
            position: 'relative',
            height: 400,
            background: '#1a1a1a',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/radikal/fox-gear.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.85,
            }}
          />
          {/* Fox Racing badge overlay */}
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              background: FOX_ORANGE,
              color: '#fff',
              borderRadius: 8,
              padding: '8px 16px',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            🦊 Fox Racing
          </div>
          {/* Authorized dealer badge */}
          <div
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              color: '#fff',
              borderRadius: 100,
              padding: '6px 16px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.04em',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            ✓ {tr('foxBadge', lang)}
          </div>
        </div>

        {/* RIGHT — content */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: FOX_ORANGE, marginBottom: 8 }}>
            {tr('foxLabel', lang)}
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              marginBottom: 16,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            {tr('foxHeading', lang)}
          </h2>
          <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 28 }}>
            {tr('foxDesc', lang)}
          </p>

          {/* Feature grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              marginBottom: 32,
            }}
          >
            {features.map((f) => (
              <div
                key={f.key}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#ffffff',
                  border: '1px solid #e8e3d8',
                  borderRadius: 10,
                  padding: '12px 14px',
                }}
              >
                <span style={{ fontSize: 20 }}>{f.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>
                  {tr(f.key, lang)}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#booking"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: FOX_ORANGE,
              color: '#ffffff',
              padding: '13px 28px',
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            {tr('foxCTA', lang)} →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .fox-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
