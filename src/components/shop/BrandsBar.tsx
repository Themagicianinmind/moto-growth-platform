import { Lang, tr } from '@/lib/i18n';

interface BrandsBarProps {
  lang: Lang;
  accentColor: string;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

const BRANDS = [
  'Yamaha', 'Kawasaki', 'Honda', 'Suzuki', 'Harley-Davidson',
  'BMW', 'Ducati', 'KTM', 'Polaris', 'Aprilia', 'BRP',
];

export default function BrandsBar({ lang, accentColor }: BrandsBarProps) {
  void accentColor;
  return (
    <section style={{ padding: '52px 20px', background: '#f5f4f0', borderTop: '1px solid #e8e3d8' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#999', marginBottom: 6 }}>
            {tr('brandsLabel', lang)}
          </p>
          <p style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF }}>
            {tr('brandsHeading', lang)}
          </p>
        </div>

        {/* Brand pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          {BRANDS.map((brand) => (
            <span
              key={brand}
              style={{
                background: '#ffffff',
                border: '1px solid #e0ddd4',
                borderRadius: 100,
                padding: '8px 20px',
                fontSize: 13,
                fontWeight: 600,
                color: '#1a1a1a',
                letterSpacing: '0.01em',
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
