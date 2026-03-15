import { Shop } from '@/lib/shops';
import { Lang } from '@/lib/i18n';

interface StatsStripProps {
  shop: Shop;
  lang: Lang;
}

export default function StatsStrip({ shop, lang }: StatsStripProps) {
  const ACCENT = shop.accentColor;
  const SERIF = 'var(--font-cormorant), Georgia, serif';

  return (
    <section
      style={{
        background: '#fafaf8',
        borderTop: '1px solid #e8e3d8',
        borderBottom: '1px solid #e8e3d8',
        padding: '32px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '24px 32px',
        }}
      >
        {shop.stats.map((stat) => (
          <div key={stat.labelFr} style={{ textAlign: 'center' }}>
            <p
              style={{
                fontSize: 28,
                fontWeight: 300,
                color: ACCENT,
                fontFamily: SERIF,
                letterSpacing: '-0.01em',
                marginBottom: 4,
                lineHeight: 1,
              }}
            >
              {stat.number}
            </p>
            <p style={{ fontSize: 12, color: '#888', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {lang === 'fr' ? stat.labelFr : stat.labelEn}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
