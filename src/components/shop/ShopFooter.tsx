import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';

interface ShopFooterProps {
  shop: Shop;
  lang: Lang;
}

export default function ShopFooter({ shop, lang }: ShopFooterProps) {
  return (
    <footer
      style={{
        background: '#0a0a12',
        borderTop: '1px solid #1e1e35',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      {/* Shop name */}
      <p style={{ fontSize: 16, fontWeight: 800, color: '#e8e8f0', marginBottom: 20 }}>
        {lang === 'fr' ? shop.nameFr : shop.nameEn}
      </p>

      {/* Info grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px 48px',
          marginBottom: 24,
        }}
      >
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#6b6b80', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
            {tr('address', lang)}
          </p>
          <p style={{ fontSize: 13, color: '#a0a0b8' }}>{shop.address}</p>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#6b6b80', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
            {tr('phone', lang)}
          </p>
          <a
            href={`tel:${shop.phone.replace(/-/g, '')}`}
            style={{ fontSize: 13, color: shop.accentColor, textDecoration: 'none', fontWeight: 600 }}
          >
            {shop.phone}
          </a>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#6b6b80', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
            {tr('hours', lang)}
          </p>
          <p style={{ fontSize: 13, color: '#a0a0b8' }}>{tr('hoursValue', lang)}</p>
        </div>
      </div>

      {/* Back to home */}
      <a
        href="/"
        style={{
          fontSize: 13,
          color: '#6b6b80',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: 24,
        }}
      >
        ← {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
      </a>

      {/* Copyright */}
      <p style={{ fontSize: 12, color: '#3a3a50' }}>
        {tr('copyright', lang)} · Possibilities IN MIND™
      </p>
    </footer>
  );
}
