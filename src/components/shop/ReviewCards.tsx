import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';

interface ReviewCardsProps {
  shop: Shop;
  lang: Lang;
}

export default function ReviewCards({ shop, lang }: ReviewCardsProps) {
  return (
    <section id="avis" style={{ padding: '56px 20px', background: '#fafaf8' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionHeader
          label={tr('reviewsLabel', lang)}
          heading={tr('reviewsHeading', lang)}
          accentColor={shop.accentColor}
          textColor="#0a0a0a"
          headingStyle={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontWeight: 300, fontSize: 32 }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {shop.reviews.map((review) => (
            <div
              key={review.name}
              style={{
                background: '#ffffff',
                border: '1px solid #e8e3d8',
                borderRadius: 12,
                padding: 24,
                boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
              }}
            >
              {/* Stars — warm muted gold on light bg */}
              <div style={{ marginBottom: 12 }}>
                {'★'.repeat(review.stars)
                  .split('')
                  .map((star, i) => (
                    <span key={i} style={{ color: '#9e8a5a', fontSize: 18 }}>
                      {star}
                    </span>
                  ))}
              </div>
              {/* Quote */}
              <p
                style={{
                  fontSize: 14,
                  color: '#555',
                  lineHeight: 1.7,
                  marginBottom: 16,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{lang === 'fr' ? review.textFr : review.textEn}&rdquo;
              </p>
              {/* Reviewer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: `${shop.accentColor}10`,
                    border: `1px solid ${shop.accentColor}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700,
                    color: shop.accentColor,
                  }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a' }}>{review.name}</p>
                  <p style={{ fontSize: 11, color: '#888' }}>{tr('verifiedCustomer', lang)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
