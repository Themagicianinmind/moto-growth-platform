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
        background: '#1a1a1a',
        borderTop: '1px solid #2a2a2a',
        padding: '48px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        {/* Shop name — Cormorant serif in footer */}
        <p
          style={{
            fontSize: 22,
            fontWeight: 300,
            color: '#f0ede6',
            marginBottom: 6,
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            letterSpacing: '0.02em',
          }}
        >
          {lang === 'fr' ? shop.nameFr : shop.nameEn}
        </p>

        {/* Accent divider */}
        <div
          style={{
            width: 32,
            height: 1,
            background: shop.accentColor,
            margin: '0 auto 28px',
          }}
        />

        {/* Info grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px 56px',
            marginBottom: 28,
          }}
        >
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
              {tr('address', lang)}
            </p>
            <p style={{ fontSize: 13, color: '#aaa' }}>{shop.address}</p>
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
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
            <p style={{ fontSize: 10, fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>
              {tr('hours', lang)}
            </p>
            <p style={{ fontSize: 13, color: '#aaa' }}>{tr('hoursValue', lang)}</p>
          </div>
        </div>

        {/* Back to home */}
        <a
          href="/"
          style={{
            fontSize: 12,
            color: '#555',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: 24,
            letterSpacing: '0.02em',
          }}
        >
          ← {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
        </a>

        {/* Copyright */}
        <p style={{ fontSize: 11, color: '#3a3a3a' }}>
          {tr('copyright', lang)} · Possibilities IN MIND™
        </p>
      </div>
    </footer>
  );
}
