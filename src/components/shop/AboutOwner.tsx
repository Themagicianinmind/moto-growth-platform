import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';

interface AboutOwnerProps {
  shop: Shop;
  lang: Lang;
}

export default function AboutOwner({ shop, lang }: AboutOwnerProps) {
  const bio = lang === 'fr' ? shop.ownerBioFr : shop.ownerBioEn;
  const initials = shop.ownerName
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section id="proprietaire" style={{ padding: '56px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionHeader
          label={tr('aboutLabel', lang)}
          heading={tr('aboutHeading', lang)}
          accentColor={shop.accentColor}
          textColor="#0a0a0a"
          headingStyle={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontSize: 32 }}
        />
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e8e3d8',
            borderRadius: 12,
            padding: 28,
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: `${shop.accentColor}10`,
                border: `1px solid ${shop.accentColor}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                fontWeight: 700,
                color: shop.accentColor,
                flexShrink: 0,
                fontFamily: 'var(--font-cormorant), Georgia, serif',
              }}
            >
              {initials}
            </div>
            {/* Bio */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: '#0a0a0a',
                  marginBottom: 8,
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  letterSpacing: '0.01em',
                }}
              >
                {shop.ownerName}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: '#555',
                  lineHeight: 1.75,
                }}
              >
                {bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
