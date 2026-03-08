import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';

interface ReviewCardsProps {
  shop: Shop;
  lang: Lang;
}

export default function ReviewCards({ shop, lang }: ReviewCardsProps) {
  return (
    <section style={{ padding: '48px 20px', background: '#0a0a15' }}>
      <SectionHeader
        label={tr('reviewsLabel', lang)}
        heading={tr('reviewsHeading', lang)}
        accentColor={shop.accentColor}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {shop.reviews.map((review) => (
          <GlassCard key={review.name} style={{ padding: 24 }}>
            {/* Stars */}
            <div style={{ marginBottom: 12 }}>
              {'★'.repeat(review.stars)
                .split('')
                .map((star, i) => (
                  <span key={i} style={{ color: '#D4AF37', fontSize: 18 }}>
                    {star}
                  </span>
                ))}
            </div>
            {/* Quote */}
            <p
              style={{
                fontSize: 14,
                color: '#a0a0b8',
                lineHeight: 1.6,
                marginBottom: 16,
                fontStyle: 'italic',
              }}
            >
              &ldquo;{lang === 'fr' ? review.textFr : review.textEn}&rdquo;
            </p>
            {/* Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: `${shop.accentColor}20`,
                  border: `1px solid ${shop.accentColor}40`,
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
                <p style={{ fontSize: 13, fontWeight: 700, color: '#e8e8f0' }}>{review.name}</p>
                <p style={{ fontSize: 11, color: '#6b6b80' }}>{tr('verifiedCustomer', lang)}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
