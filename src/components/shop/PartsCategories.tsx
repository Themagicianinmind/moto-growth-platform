import { Lang, tr } from '@/lib/i18n';

interface PartsCategoriesProps {
  lang: Lang;
  accentColor: string;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

const PARTS = [
  { icon: '🛑', fr: 'Freins', en: 'Brakes' },
  { icon: '⚙️', fr: 'Moteur', en: 'Engine' },
  { icon: '🔩', fr: 'Suspension', en: 'Suspension' },
  { icon: '⚡', fr: 'Électrique', en: 'Electrical' },
  { icon: '🏗️', fr: 'Carrosserie', en: 'Body & Fairings' },
  { icon: '🔘', fr: 'Pneus & jantes', en: 'Tires & Wheels' },
  { icon: '💨', fr: 'Échappement', en: 'Exhaust' },
  { icon: '🧢', fr: 'Équipement rider', en: 'Rider Gear' },
];

export default function PartsCategories({ lang, accentColor }: PartsCategoriesProps) {
  return (
    <section style={{ padding: '72px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accentColor, marginBottom: 8 }}>
            {tr('partsCatLabel', lang)}
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 12 }}>
            {tr('partsCatHeading', lang)}
          </h2>
          <p style={{ fontSize: 15, color: '#666', maxWidth: 500, margin: '0 auto' }}>
            {tr('partsCatSubtitle', lang)}
          </p>
        </div>

        {/* 8 tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {PARTS.map((part) => (
            <a
              key={part.fr}
              href="#booking"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: '#ffffff',
                border: '1px solid #e8e3d8',
                borderRadius: 12,
                padding: '18px 20px',
                textDecoration: 'none',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                transition: 'border-color 0.15s',
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${accentColor}10`,
                  border: `1px solid ${accentColor}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                {part.icon}
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a', marginBottom: 2 }}>
                  {lang === 'fr' ? part.fr : part.en}
                </p>
                <p style={{ fontSize: 11, color: accentColor, fontWeight: 600 }}>
                  {tr('partsCatQuote', lang)} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
