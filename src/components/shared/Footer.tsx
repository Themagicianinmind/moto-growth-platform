import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';

interface FooterProps {
  shop: Shop;
  lang: Lang;
}

export default function Footer({ shop, lang }: FooterProps) {
  const isDynamik = shop.id === 'dynamik';

  const dynamikServiceLinks = [
    { label: lang === 'fr' ? 'Réparation moto' : 'Motorcycle Repair', href: '#booking' },
    { label: lang === 'fr' ? 'Entretien & révision' : 'Maintenance & Service', href: '#booking' },
    { label: lang === 'fr' ? 'Vente Vespa & Piaggio' : 'Vespa & Piaggio Sales', href: '#vespa-models' },
    { label: lang === 'fr' ? 'Modifications' : 'Modifications', href: '#booking' },
    { label: lang === 'fr' ? 'Remorquage' : 'Towing', href: '#booking' },
    { label: lang === 'fr' ? 'Entreposage hivernal' : 'Winter Storage', href: '#booking' },
  ];

  const radikalServiceLinks = [
    { label: lang === 'fr' ? 'Motos & Harley-Davidson' : 'Motorcycles & Harley', href: '#booking' },
    { label: lang === 'fr' ? 'VTT & UTV' : 'ATV & UTV', href: '#booking' },
    { label: lang === 'fr' ? 'Motocross' : 'Motocross', href: '#booking' },
    { label: lang === 'fr' ? 'Motoneige' : 'Snowmobile', href: '#booking' },
    { label: lang === 'fr' ? 'Inspection gratuite' : 'Free Inspection', href: '#booking' },
  ];

  const dynamikProductLinks = [
    { label: 'Vespa Sprint', href: '#vespa-models' },
    { label: 'Vespa Primavera', href: '#vespa-models' },
    { label: 'Vespa GTS', href: '#vespa-models' },
    { label: lang === 'fr' ? 'Pièces OEM Piaggio' : 'Piaggio OEM Parts', href: '#' },
    { label: lang === 'fr' ? 'Accessoires' : 'Accessories', href: '#' },
  ];

  const radikalProductLinks = [
    { label: 'Fox Racing', href: '/radikal/fox-racing' },
    { label: lang === 'fr' ? 'Pièces moto' : 'Motorcycle Parts', href: '/radikal/parts' },
    { label: lang === 'fr' ? 'Casques & équipement' : 'Helmets & Gear', href: '/radikal/parts' },
    { label: lang === 'fr' ? 'Pièces VTT' : 'ATV Parts', href: '/radikal/parts' },
  ];

  const companyLinks = [
    { label: tr('footerAbout', lang), href: `/${shop.id}/about` },
    { label: tr('footerContact', lang), href: `/${shop.id}/contact` },
    { label: tr('footerPromotions', lang), href: `/${shop.id}/promotions` },
    { label: tr('footerMarketplace', lang), href: `/${shop.id}/marketplace` },
    ...(!isDynamik ? [{ label: tr('footerExam', lang), href: '/exam' }] : []),
  ];

  const serviceLinks = isDynamik ? dynamikServiceLinks : radikalServiceLinks;
  const productLinks = isDynamik ? dynamikProductLinks : radikalProductLinks;
  const productsColLabel = isDynamik ? tr('footerProductsCol', lang) : tr('footerRadikalProductsCol', lang);

  return (
    <footer style={{ background: '#1a1a1a', color: '#aaa' }}>
      {/* Main footer grid */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '64px 24px 48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px 40px',
        }}
      >
        {/* Column 1 — Brand */}
        <div>
          <p
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: '#f0ede6',
              marginBottom: 8,
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              letterSpacing: '0.01em',
            }}
          >
            {lang === 'fr' ? shop.nameFr : shop.nameEn}
          </p>
          <div
            style={{
              width: 28,
              height: 1,
              background: shop.accentColor,
              marginBottom: 14,
            }}
          />
          <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, marginBottom: 20 }}>
            {tr('footerTagline', lang)}
          </p>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a
              href={`tel:${shop.phone.replace(/-/g, '')}`}
              style={{ fontSize: 13, color: shop.accentColor, textDecoration: 'none', fontWeight: 600 }}
            >
              📞 {shop.phone}
            </a>
            <p style={{ fontSize: 12, color: '#666', lineHeight: 1.5 }}>
              📍 {shop.address}
            </p>
            <p style={{ fontSize: 12, color: '#666' }}>
              🕐 {tr('hoursValue', lang)}
            </p>
          </div>

          {/* Trust badges */}
          <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {isDynamik ? (
              <>
                <span style={footerBadgeStyle}>{tr('footerDealerBadge', lang)}</span>
                <span style={footerBadgeStyle}>{tr('footerMemberBadge', lang)}</span>
              </>
            ) : (
              <>
                <span style={footerBadgeStyle}>🚔 {lang === 'fr' ? 'Police Harley-Davidson' : 'Police Harley-Davidson'}</span>
                <span style={footerBadgeStyle}>Fox Racing</span>
              </>
            )}
          </div>
        </div>

        {/* Column 2 — Services */}
        <div>
          <p style={footerColHeadingStyle}>{tr('footerServicesCol', lang)}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {serviceLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} style={footerLinkStyle}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Products */}
        <div>
          <p style={footerColHeadingStyle}>{productsColLabel}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {productLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} style={footerLinkStyle}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Company */}
        <div>
          <p style={footerColHeadingStyle}>{tr('footerCompanyCol', lang)}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {companyLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} style={footerLinkStyle}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Back to home */}
          <a
            href="/"
            style={{ ...footerLinkStyle, display: 'inline-block', marginTop: 20, fontSize: 12 }}
          >
            ← {lang === 'fr' ? "Retour à l'accueil" : 'Back to home'}
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid #2a2a2a',
          padding: '20px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px 24px',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        <p style={{ fontSize: 11, color: '#3a3a3a', margin: 0 }}>
          {tr('copyright', lang)} · {tr('footerPoweredBy', lang)}
        </p>
        <p style={{ fontSize: 11, color: '#3a3a3a', margin: 0 }}>
          {lang === 'fr' ? 'Conçu avec passion à Gatineau, QC' : 'Built with passion in Gatineau, QC'}
        </p>
      </div>
    </footer>
  );
}

const footerColHeadingStyle: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#666',
  marginBottom: 16,
};

const footerLinkStyle: React.CSSProperties = {
  fontSize: 13,
  color: '#888',
  textDecoration: 'none',
  transition: 'color 0.15s',
};

const footerBadgeStyle: React.CSSProperties = {
  fontSize: 10,
  color: '#555',
  background: '#2a2a2a',
  border: '1px solid #333',
  borderRadius: 4,
  padding: '3px 8px',
  whiteSpace: 'nowrap' as const,
};
