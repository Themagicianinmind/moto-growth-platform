import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';

interface ServiceGridProps {
  shop: Shop;
  lang: Lang;
}

export default function ServiceGrid({ shop, lang }: ServiceGridProps) {
  return (
    <section style={{ padding: '48px 20px' }}>
      <SectionHeader
        label={tr('ourServices', lang)}
        heading={tr('whatWeOffer', lang)}
        accentColor={shop.accentColor}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 16,
        }}
      >
        {shop.services.map((svc) => (
          <GlassCard key={svc.nameFr} style={{ padding: 20, textAlign: 'center' }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: svc.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                margin: '0 auto 12px',
              }}
            >
              {svc.icon}
            </div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#e8e8f0',
                lineHeight: 1.3,
              }}
            >
              {lang === 'fr' ? svc.nameFr : svc.nameEn}
            </p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
