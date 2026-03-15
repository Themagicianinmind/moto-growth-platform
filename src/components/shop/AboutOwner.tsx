import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';

interface AboutOwnerProps {
  shop: Shop;
  lang: Lang;
}

const SERIF = 'var(--font-cormorant), Georgia, serif';

const TRUST_BADGES: Record<string, { icon: string; labelFr: string; labelEn: string }[]> = {
  dynamik: [
    { icon: '🛵', labelFr: 'Concessionnaire Vespa & Piaggio', labelEn: 'Vespa & Piaggio Dealer' },
    { icon: '✅', labelFr: 'Membre AMO Moto', labelEn: 'AMO Moto Member' },
    { icon: '📅', labelFr: 'Depuis 1999', labelEn: 'Since 1999' },
  ],
  radikal: [
    { icon: '🚔', labelFr: 'Contrat Harley-Davidson Police', labelEn: 'Police Harley-Davidson Contract' },
    { icon: '🦊', labelFr: 'Équipementier Fox Racing', labelEn: 'Fox Racing Dealer' },
    { icon: '🏁', labelFr: 'Spécialiste powersports', labelEn: 'Powersports Specialist' },
  ],
};

const OWNER_TITLE: Record<string, { fr: string; en: string }> = {
  dynamik: { fr: 'Propriétaire · Dynamik Performance', en: 'Owner · Dynamik Performance' },
  radikal: { fr: 'Propriétaire · Radikal Motosport', en: 'Owner · Radikal Motosport' },
};

export default function AboutOwner({ shop, lang }: AboutOwnerProps) {
  const ACCENT = shop.accentColor;
  const badges = TRUST_BADGES[shop.id] ?? [];
  const title = OWNER_TITLE[shop.id] ?? { fr: 'Propriétaire', en: 'Owner' };

  const initials = shop.ownerName
    .split(' ')
    .slice(0, 2)
    .map((n: string) => n[0])
    .join('');

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: `${ACCENT}10`,
    border: `1px solid ${ACCENT}30`,
    borderRadius: 100,
    padding: '5px 14px',
    fontSize: 12,
    fontWeight: 600,
    color: '#1a1a1a',
    whiteSpace: 'nowrap',
  };

  return (
    <section id="equipe" style={{ padding: '72px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          {/* Portrait placeholder — swap with real photo once provided */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div
              style={{
                width: 240,
                height: 300,
                borderRadius: 14,
                background: `${ACCENT}08`,
                border: `1px solid ${ACCENT}22`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: '50%',
                  background: `${ACCENT}15`,
                  border: `2px solid ${ACCENT}35`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  fontWeight: 300,
                  fontFamily: SERIF,
                  color: ACCENT,
                  letterSpacing: '0.04em',
                  marginBottom: 18,
                }}
              >
                {initials}
              </div>
              <p style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 300, color: '#1a1a1a', textAlign: 'center', padding: '0 16px', marginBottom: 4 }}>
                {shop.ownerName}
              </p>
              <p style={{ fontSize: 10, color: '#bbb', fontStyle: 'italic' }}>
                {lang === 'fr' ? 'Photo à venir' : 'Photo coming soon'}
              </p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              label={tr('aboutLabel', lang)}
              heading={tr('aboutHeading', lang)}
              subtitle={tr('aboutSubtitle', lang)}
              accentColor={ACCENT}
              textColor="#0a0a0a"
              headingStyle={{ fontFamily: SERIF, fontWeight: 300, fontSize: 36 }}
            />

            <p style={{ fontSize: 26, fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, letterSpacing: '-0.01em', marginBottom: 4 }}>
              {shop.ownerName}
            </p>
            <p style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 22 }}>
              {lang === 'fr' ? title.fr : title.en}
            </p>

            <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 20, margin: '0 0 20px 0' }}>
              <p style={{ fontSize: 18, color: '#1a1a1a', lineHeight: 1.7, fontStyle: 'italic', fontFamily: SERIF, fontWeight: 300 }}>
                &ldquo;{lang === 'fr' ? shop.ownerQuoteFr : shop.ownerQuoteEn}&rdquo;
              </p>
            </blockquote>

            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: 24 }}>
              {lang === 'fr' ? shop.ownerBioFr : shop.ownerBioEn}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {badges.map((b) => (
                <span key={b.labelFr} style={badgeStyle}>
                  {b.icon} {lang === 'fr' ? b.labelFr : b.labelEn}
                </span>
              ))}
            </div>

            <a
              href="#booking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: ACCENT,
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '0.04em',
                textDecoration: 'none',
              }}
            >
              {shop.id === 'dynamik'
                ? lang === 'fr' ? 'Prendre rendez-vous \u2192' : 'Book an Appointment \u2192'
                : lang === 'fr' ? 'Obtenir une soumission \u2192' : 'Get a Quote \u2192'}
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 720px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
