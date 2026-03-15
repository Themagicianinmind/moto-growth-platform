import { Shop } from '@/lib/shops';
import { Lang } from '@/lib/i18n';

interface StatsStripProps {
  shop: Shop;
  lang: Lang;
}

export default function StatsStrip({ shop, lang }: StatsStripProps) {
  return (
    <section
      style={{
        background: '#0f1a2e',
        borderTop: `3px solid ${shop.accentColor}`,
        padding: '0',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        {shop.stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: '32px 16px',
              textAlign: 'center',
              borderRight: i < shop.stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}
          >
            {/* Number */}
            <p
              style={{
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                fontWeight: 300,
                color: '#f0ede6',
                lineHeight: 1,
                marginBottom: 6,
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                letterSpacing: '-0.01em',
              }}
            >
              {stat.number}
            </p>
            {/* Accent rule */}
            <div
              style={{
                width: 20,
                height: 1,
                background: shop.accentColor,
                margin: '0 auto 8px',
              }}
            />
            {/* Label */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight: 1.3,
              }}
            >
              {lang === 'fr' ? stat.labelFr : stat.labelEn}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: wrap to 2x2 */}
      <style>{`
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
