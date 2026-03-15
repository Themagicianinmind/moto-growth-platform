import { Lang, tr } from '@/lib/i18n';

interface VehicleCategoriesProps {
  lang: Lang;
  accentColor: string;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

const categories = [
  {
    key: 'motorcycles',
    image: '/images/radikal/hero.jpg',
    labelKey: 'catMotorcycles' as const,
    subKey: 'catMotorcyclesSub' as const,
    href: '#booking',
  },
  {
    key: 'atv',
    image: '/images/radikal/atv.jpg',
    labelKey: 'catATV' as const,
    subKey: 'catATVSub' as const,
    href: '#booking',
  },
  {
    key: 'motocross',
    image: '/images/radikal/motocross.jpg',
    labelKey: 'catMotocross' as const,
    subKey: 'catMotocrossSub' as const,
    href: '#booking',
  },
  {
    key: 'snowmobile',
    image: '/images/radikal/snowmobile.jpg',
    labelKey: 'catSnowmobile' as const,
    subKey: 'catSnowmobileSub' as const,
    href: '#booking',
  },
  {
    key: 'boats',
    image: null,
    labelKey: 'catBoats' as const,
    subKey: 'catBoatsSub' as const,
    href: '#booking',
  },
  {
    key: 'inspection',
    image: '/images/radikal/moto-repair.jpg',
    labelKey: 'catInspectionFree' as const,
    subKey: 'catInspectionFreeSub' as const,
    href: '#booking',
  },
];

export default function VehicleCategories({ lang, accentColor }: VehicleCategoriesProps) {
  return (
    <section style={{ padding: '72px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accentColor, marginBottom: 8 }}>
            {tr('vehicleCatLabel', lang)}
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 12, letterSpacing: '-0.01em' }}>
            {tr('vehicleCatHeading', lang)}
          </h2>
          <p style={{ fontSize: 15, color: '#666', maxWidth: 520 }}>
            {tr('vehicleCatSubtitle', lang)}
          </p>
        </div>

        {/* 6-card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}
        >
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={cat.href}
              style={{
                display: 'block',
                borderRadius: 12,
                overflow: 'hidden',
                position: 'relative',
                height: 200,
                textDecoration: 'none',
                background: cat.image ? '#1a1a1a' : `linear-gradient(135deg, ${accentColor}20, ${accentColor}08)`,
                border: cat.image ? 'none' : `1px solid ${accentColor}30`,
              }}
            >
              {/* Background image */}
              {cat.image && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.65,
                  }}
                />
              )}
              {/* Dark overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: cat.image
                    ? 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)'
                    : 'none',
                }}
              />
              {/* Text */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px 20px 18px',
                }}
              >
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 300,
                    fontFamily: SERIF,
                    color: cat.image ? '#ffffff' : '#0a0a0a',
                    marginBottom: 2,
                    letterSpacing: '0.01em',
                  }}
                >
                  {tr(cat.labelKey, lang)}
                </p>
                <p style={{ fontSize: 12, color: cat.image ? 'rgba(255,255,255,0.7)' : '#888', fontWeight: 500 }}>
                  {tr(cat.subKey, lang)} →
                </p>
              </div>
              {/* Gold accent bar on no-image cards */}
              {!cat.image && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 4,
                    height: '100%',
                    background: accentColor,
                    borderRadius: '12px 0 0 12px',
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
