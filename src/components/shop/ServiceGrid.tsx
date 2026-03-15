import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';

interface ServiceGridProps {
  shop: Shop;
  lang: Lang;
}

export default function ServiceGrid({ shop, lang }: ServiceGridProps) {
  return (
    <section id="services" style={{ padding: '56px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionHeader
          label={tr('ourServices', lang)}
          heading={tr('whatWeOffer', lang)}
          accentColor={shop.accentColor}
          textColor="#0a0a0a"
          headingStyle={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontSize: 32 }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: 16,
          }}
        >
          {shop.services.map((svc) => (
            <div
              key={svc.nameFr}
              style={{
                background: '#ffffff',
                border: '1px solid #e8e3d8',
                borderRadius: 12,
                padding: 20,
                textAlign: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
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
                  border: '1px solid #e8e3d8',
                }}
              >
                {svc.icon}
              </div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#1a1a1a',
                  lineHeight: 1.3,
                }}
              >
                {lang === 'fr' ? svc.nameFr : svc.nameEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
