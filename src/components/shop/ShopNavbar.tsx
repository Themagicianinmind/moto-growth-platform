'use client';

import { Shop } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import LanguageToggle from '@/components/ui/LanguageToggle';

interface ShopNavbarProps {
  shop: Shop;
  lang: Lang;
  onToggleLang: (l: Lang) => void;
}

export default function ShopNavbar({ shop, lang, onToggleLang }: ShopNavbarProps) {
  const name = lang === 'fr' ? shop.nameFr : shop.nameEn;

  const navLinks = [
    { href: '#services', label: lang === 'fr' ? 'Services' : 'Services' },
    { href: '#avis', label: lang === 'fr' ? 'Avis' : 'Reviews' },
    { href: '#proprietaire', label: lang === 'fr' ? 'Propriétaire' : 'Owner' },
    { href: '#booking', label: lang === 'fr' ? 'Réservation' : 'Book' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: '#0a0a12e0',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #1e1e35',
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          height: 56,
          gap: 8,
        }}
      >
        {/* Shop name — left anchor */}
        <a
          href="#hero"
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: shop.accentColor,
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
        >
          {name}
        </a>

        {/* Nav links — center (hidden on mobile < 600px via inline media trick) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 0,
          }}
          className="shop-nav-links"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: '#a0a0b8',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: 6,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: phone + lang toggle */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
          <a
            href={`tel:${shop.phone.replace(/-/g, '')}`}
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: shop.accentColor,
              textDecoration: 'none',
              background: `${shop.accentColor}15`,
              border: `1px solid ${shop.accentColor}35`,
              borderRadius: 6,
              padding: '5px 10px',
              whiteSpace: 'nowrap',
            }}
          >
            📞 {shop.phone}
          </a>
          <LanguageToggle lang={lang} onToggle={onToggleLang} />
        </div>
      </div>

      {/* Mobile sub-row for nav links */}
      <div
        style={{
          display: 'flex',
          gap: 0,
          justifyContent: 'center',
          borderTop: '1px solid #1e1e3560',
          padding: '4px 0',
        }}
        className="shop-nav-mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href + '-m'}
            href={link.href}
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#6b6b80',
              textDecoration: 'none',
              padding: '4px 10px',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
