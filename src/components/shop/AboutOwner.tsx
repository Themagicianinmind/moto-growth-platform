import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
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
    <section id="proprietaire" style={{ padding: '48px 20px' }}>
      <SectionHeader
        label={tr('aboutLabel', lang)}
        heading={tr('aboutHeading', lang)}
        accentColor={shop.accentColor}
      />
      <GlassCard style={{ padding: 28 }}>
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Avatar */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: `${shop.accentColor}20`,
              border: `2px solid ${shop.accentColor}60`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 800,
              color: shop.accentColor,
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
          {/* Bio */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: '#e8e8f0',
                marginBottom: 8,
              }}
            >
              {shop.ownerName}
            </p>
            <p
              style={{
                fontSize: 14,
                color: '#a0a0b8',
                lineHeight: 1.7,
              }}
            >
              {bio}
            </p>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
