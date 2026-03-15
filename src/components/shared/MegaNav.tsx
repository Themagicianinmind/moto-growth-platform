'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Shop } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import LanguageToggle from '@/components/ui/LanguageToggle';

type DropdownKey = 'services' | 'vespa' | 'parts' | null;

interface MegaNavProps {
  shop: Shop;
  lang: Lang;
  onToggleLang: (l: Lang) => void;
}

// ─── Dynamik dropdown content ────────────────────────────────────────────────

function DynamikServicesDropdown({ lang }: { lang: Lang }) {
  const col1 = [
    { icon: '🔧', label: tr('navRepair', lang), desc: tr('navRepairDesc', lang), href: '#booking' },
    { icon: '⚙️', label: tr('navMaintenance', lang), desc: tr('navMaintenanceDesc', lang), href: '#booking' },
    { icon: '🚛', label: tr('navTowing', lang), desc: tr('navTowingDesc', lang), href: '#booking' },
  ];
  const col2 = [
    { icon: '🛵', label: tr('navVespaSales', lang), desc: tr('navVespaSalesDesc', lang), href: '#vespa-models' },
    { icon: '🏎️', label: tr('navModifications', lang), desc: tr('navModificationsDesc', lang), href: '#booking' },
    { icon: '❄️', label: tr('navStorage', lang), desc: tr('navStorageDesc', lang), href: '#booking' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minWidth: 480 }}>
      <div style={{ padding: '8px 0' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#888', padding: '8px 20px 4px', textTransform: 'uppercase' }}>
          {lang === 'fr' ? 'Réparation & Entretien' : 'Repair & Maintenance'}
        </p>
        {col1.map(item => (
          <a key={item.label} href={item.href} style={dropdownItemStyle}>
            <span style={{ fontSize: 18, width: 28, flexShrink: 0 }}>{item.icon}</span>
            <span>
              <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{item.label}</span>
              <span style={{ display: 'block', fontSize: 12, color: '#888', marginTop: 1 }}>{item.desc}</span>
            </span>
          </a>
        ))}
      </div>
      <div style={{ padding: '8px 0', borderLeft: '1px solid #f0ede8' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#888', padding: '8px 20px 4px', textTransform: 'uppercase' }}>
          {lang === 'fr' ? 'Spécialités' : 'Specialties'}
        </p>
        {col2.map(item => (
          <a key={item.label} href={item.href} style={dropdownItemStyle}>
            <span style={{ fontSize: 18, width: 28, flexShrink: 0 }}>{item.icon}</span>
            <span>
              <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{item.label}</span>
              <span style={{ display: 'block', fontSize: 12, color: '#888', marginTop: 1 }}>{item.desc}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function DynamikVespaDropdown({ lang }: { lang: Lang }) {
  const vespaModels = [
    { label: 'Vespa Sprint', href: '#vespa-models' },
    { label: 'Vespa Primavera', href: '#vespa-models' },
    { label: 'Vespa GTS', href: '#vespa-models' },
  ];
  const piaggioModels = [
    { label: 'Piaggio Liberty', href: '#vespa-models' },
    { label: 'Piaggio Fly', href: '#vespa-models' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, minWidth: 560 }}>
      {/* Vespa column */}
      <div style={{ padding: '8px 0' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#888', padding: '8px 20px 4px', textTransform: 'uppercase' }}>
          Vespa
        </p>
        {vespaModels.map(m => (
          <a key={m.label} href={m.href} style={simpleDropdownItemStyle}>{m.label}</a>
        ))}
        <a href="#vespa-models" style={{ ...simpleDropdownItemStyle, color: '#2563eb', fontWeight: 600, marginTop: 4 }}>
          {tr('navSeeAll', lang)}
        </a>
      </div>
      {/* Piaggio column */}
      <div style={{ padding: '8px 0', borderLeft: '1px solid #f0ede8' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#888', padding: '8px 20px 4px', textTransform: 'uppercase' }}>
          Piaggio
        </p>
        {piaggioModels.map(m => (
          <a key={m.label} href={m.href} style={simpleDropdownItemStyle}>{m.label}</a>
        ))}
      </div>
      {/* Accessories column */}
      <div style={{ padding: '8px 0', borderLeft: '1px solid #f0ede8' }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#888', padding: '8px 20px 4px', textTransform: 'uppercase' }}>
          {tr('navAccessories', lang)}
        </p>
        {[
          { label: lang === 'fr' ? 'Casques & protection' : 'Helmets & protection', href: '#' },
          { label: lang === 'fr' ? 'Top cases' : 'Top cases', href: '#' },
          { label: tr('navOEMParts', lang), href: '#' },
        ].map(item => (
          <a key={item.label} href={item.href} style={simpleDropdownItemStyle}>{item.label}</a>
        ))}
      </div>
    </div>
  );
}

// ─── Radikal dropdown content ─────────────────────────────────────────────────

function RadikalServicesDropdown({ lang }: { lang: Lang }) {
  const items = [
    { icon: '🏍️', label: tr('navMotoRepair', lang), desc: lang === 'fr' ? 'Toutes marques, Harley spécialiste' : 'All brands, Harley specialist', href: '#booking' },
    { icon: '🚵', label: tr('navATV', lang), desc: lang === 'fr' ? 'VTT, UTV, tous terrains' : 'ATV, UTV, all terrains', href: '#booking' },
    { icon: '🏁', label: tr('navMotocross', lang), desc: lang === 'fr' ? 'Pièces & service circuit' : 'Parts & track service', href: '#booking' },
    { icon: '🌨️', label: tr('navSnowmobile', lang), desc: lang === 'fr' ? 'Réparation et entreposage' : 'Repair and storage', href: '#booking' },
    { icon: '⛵', label: tr('navBoat', lang), desc: lang === 'fr' ? 'Moteurs marins, toutes marques' : 'Marine engines, all brands', href: '#booking' },
    { icon: '✅', label: tr('navInspection', lang), desc: tr('navInspectionDesc', lang), href: '#booking' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, minWidth: 480 }}>
      <div style={{ padding: '8px 0' }}>
        {items.slice(0, 3).map(item => (
          <a key={item.label} href={item.href} style={dropdownItemStyle}>
            <span style={{ fontSize: 18, width: 28, flexShrink: 0 }}>{item.icon}</span>
            <span>
              <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{item.label}</span>
              <span style={{ display: 'block', fontSize: 12, color: '#888', marginTop: 1 }}>{item.desc}</span>
            </span>
          </a>
        ))}
      </div>
      <div style={{ padding: '8px 0', borderLeft: '1px solid #f0ede8' }}>
        {items.slice(3).map(item => (
          <a key={item.label} href={item.href} style={dropdownItemStyle}>
            <span style={{ fontSize: 18, width: 28, flexShrink: 0 }}>{item.icon}</span>
            <span>
              <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{item.label}</span>
              <span style={{ display: 'block', fontSize: 12, color: '#888', marginTop: 1 }}>{item.desc}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const dropdownItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
  padding: '9px 20px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background 0.1s',
};

const simpleDropdownItemStyle: React.CSSProperties = {
  display: 'block',
  padding: '7px 20px',
  fontSize: 13,
  color: '#1a1a1a',
  textDecoration: 'none',
  cursor: 'pointer',
};

// ─── Main MegaNav ─────────────────────────────────────────────────────────────

export default function MegaNav({ shop, lang, onToggleLang }: MegaNavProps) {
  const [activeMenu, setActiveMenu] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDynamik = shop.id === 'dynamik';

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = mobileOpen ? 'hidden' : '';
    }
    return () => { if (typeof document !== 'undefined') document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openMenu = useCallback((key: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const navLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    padding: '0 14px',
    height: 64,
    fontSize: 14,
    fontWeight: 500,
    color: '#1a1a1a',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit',
    transition: 'color 0.15s',
    letterSpacing: '-0.01em',
    position: 'relative' as const,
  };

  const ctaStyle: React.CSSProperties = {
    background: shop.accentColor,
    color: '#ffffff',
    padding: '9px 22px',
    borderRadius: 100,
    fontSize: 13,
    fontWeight: 700,
    textDecoration: 'none',
    letterSpacing: '-0.01em',
    whiteSpace: 'nowrap' as const,
    transition: 'opacity 0.15s',
    flexShrink: 0,
  };

  return (
    <>
      {/* ── FIXED HEADER (utility bar + main nav) ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'box-shadow 0.2s',
        }}
      >
        {/* ── Utility bar ── */}
        <div
          style={{
            background: '#fafaf8',
            borderBottom: '1px solid #efefec',
            height: 36,
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              padding: '0 24px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            {/* Left: phone + address + promo */}
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 20, overflow: 'hidden' }}
              className="utility-left"
            >
              <a
                href={`tel:${shop.phone.replace(/-/g, '')}`}
                style={{ fontSize: 12, color: '#555', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                📞 {shop.phone}
              </a>
              <span style={{ fontSize: 12, color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                📍 {shop.addressShort}
              </span>
              <span
                style={{ fontSize: 12, color: shop.accentColor, fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}
                className="utility-promo"
              >
                {tr('navPromoSpring', lang)}
              </span>
            </div>
            {/* Right: lang toggle */}
            <LanguageToggle lang={lang} onToggle={onToggleLang} theme="light" />
          </div>
        </div>

        {/* ── Main nav bar ── */}
        <div
          style={{
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid #e8e3d8',
            height: 64,
          }}
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              padding: '0 24px',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              gap: 0,
            }}
          >
            {/* Logo */}
            <a
              href={`/${shop.id}`}
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: '#0a0a0a',
                textDecoration: 'none',
                letterSpacing: '-0.03em',
                flexShrink: 0,
                marginRight: 32,
                fontFamily: 'var(--font-cormorant), Georgia, serif',
              }}
            >
              {lang === 'fr' ? shop.nameFr : shop.nameEn}
            </a>

            {/* Desktop nav — center */}
            <nav
              style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 0 }}
              className="desktop-nav"
            >
              {/* Services dropdown */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => openMenu('services')}
                onMouseLeave={scheduleClose}
              >
                <button
                  style={{
                    ...navLinkStyle,
                    color: activeMenu === 'services' ? shop.accentColor : '#1a1a1a',
                  }}
                  onFocus={() => openMenu('services')}
                >
                  {tr('navServices', lang)}
                  <span style={{ fontSize: 10, opacity: 0.5 }}>▾</span>
                </button>
                {activeMenu === 'services' && (
                  <div
                    style={megaDropdownStyle}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {isDynamik
                      ? <DynamikServicesDropdown lang={lang} />
                      : <RadikalServicesDropdown lang={lang} />
                    }
                  </div>
                )}
              </div>

              {/* Vespa & Piaggio (Dynamik only) or Parts (Radikal) */}
              {isDynamik ? (
                <div
                  style={{ position: 'relative' }}
                  onMouseEnter={() => openMenu('vespa')}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    style={{
                      ...navLinkStyle,
                      color: activeMenu === 'vespa' ? shop.accentColor : '#1a1a1a',
                    }}
                    onFocus={() => openMenu('vespa')}
                  >
                    {tr('navVespa', lang)}
                    <span style={{ fontSize: 10, opacity: 0.5 }}>▾</span>
                  </button>
                  {activeMenu === 'vespa' && (
                    <div
                      style={megaDropdownStyle}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <DynamikVespaDropdown lang={lang} />
                    </div>
                  )}
                </div>
              ) : (
                /* Fox Racing nav item for Radikal — highlighted gold */
                <a
                  href="/radikal/fox-racing"
                  style={{
                    ...navLinkStyle,
                    color: '#9e8a5a',
                    fontWeight: 700,
                  }}
                >
                  {tr('navFoxRacing', lang)}
                  <span
                    style={{
                      background: '#9e8a5a18',
                      border: '1px solid #9e8a5a40',
                      borderRadius: 4,
                      fontSize: 9,
                      fontWeight: 700,
                      padding: '1px 5px',
                      color: '#9e8a5a',
                      letterSpacing: '0.05em',
                    }}
                  >
                    NEW
                  </span>
                </a>
              )}

              {/* Marketplace */}
              <a
                href={`/${shop.id}/marketplace`}
                style={navLinkStyle}
              >
                {tr('navMarketplace', lang)}
              </a>

              {/* Exam (Radikal only) */}
              {!isDynamik && (
                <a href="/exam" style={navLinkStyle}>
                  {tr('navExam', lang)}
                </a>
              )}

              {/* About */}
              <a href={`/${shop.id}/about`} style={navLinkStyle}>
                {tr('navAbout', lang)}
              </a>

              {/* Contact */}
              <a href={`/${shop.id}/contact`} style={navLinkStyle}>
                {tr('navContact', lang)}
              </a>
            </nav>

            {/* Right: CTA + mobile hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 16 }}>
              <a href="#booking" style={ctaStyle} className="desktop-cta">
                {isDynamik ? tr('navBookNow', lang) : tr('navGetQuote', lang)}
              </a>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
                style={{
                  display: 'none',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  color: '#1a1a1a',
                  fontSize: 22,
                  lineHeight: 1,
                }}
                className="hamburger-btn"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: '#ffffff',
            overflowY: 'auto',
          }}
        >
          {/* Mobile header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              height: 60,
              borderBottom: '1px solid #e8e3d8',
              position: 'sticky',
              top: 0,
              background: '#fff',
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: '#0a0a0a',
                fontFamily: 'var(--font-cormorant), Georgia, serif',
              }}
            >
              {lang === 'fr' ? shop.nameFr : shop.nameEn}
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#555',
                padding: 8,
              }}
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          {/* Mobile nav links */}
          <div style={{ padding: '8px 0 40px' }}>
            {/* Phone CTA */}
            <a
              href={`tel:${shop.phone.replace(/-/g, '')}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 24px',
                background: `${shop.accentColor}10`,
                borderBottom: '1px solid #efefec',
                fontSize: 15,
                fontWeight: 700,
                color: shop.accentColor,
                textDecoration: 'none',
              }}
            >
              📞 {shop.phone}
            </a>

            {/* Services accordion */}
            {[
              {
                key: 'services',
                label: tr('navServices', lang),
                links: shop.services.map(s => ({
                  label: lang === 'fr' ? s.nameFr : s.nameEn,
                  href: s.href ?? '#booking',
                })),
              },
              ...(isDynamik ? [{
                key: 'vespa',
                label: tr('navVespa', lang),
                links: [
                  { label: 'Vespa Sprint', href: '#vespa-models' },
                  { label: 'Vespa Primavera', href: '#vespa-models' },
                  { label: 'Vespa GTS', href: '#vespa-models' },
                  { label: tr('navAccessories', lang), href: '#' },
                  { label: tr('navOEMParts', lang), href: '#' },
                ],
              }] : []),
            ].map(section => (
              <div key={section.key} style={{ borderBottom: '1px solid #f0ede8' }}>
                <button
                  onClick={() => setMobileSection(mobileSection === section.key ? null : section.key)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#0a0a0a',
                    fontFamily: 'inherit',
                    textAlign: 'left',
                  }}
                >
                  {section.label}
                  <span style={{ fontSize: 12, color: '#888', transform: mobileSection === section.key ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s' }}>▶</span>
                </button>
                {mobileSection === section.key && (
                  <div style={{ padding: '0 0 8px 0', background: '#fafaf8' }}>
                    {section.links.map(link => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: '10px 24px 10px 40px',
                          fontSize: 14,
                          color: '#555',
                          textDecoration: 'none',
                          borderBottom: '1px solid #f5f4f0',
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Simple nav links */}
            {[
              ...(!isDynamik ? [{ label: tr('navFoxRacing', lang), href: '/radikal/fox-racing' }] : []),
              { label: tr('navMarketplace', lang), href: `/${shop.id}/marketplace` },
              ...(!isDynamik ? [{ label: tr('navExam', lang), href: '/exam' }] : []),
              { label: tr('navAbout', lang), href: `/${shop.id}/about` },
              { label: tr('navContact', lang), href: `/${shop.id}/contact` },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#0a0a0a',
                  textDecoration: 'none',
                  borderBottom: '1px solid #f0ede8',
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <div style={{ padding: '24px 24px 0' }}>
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: shop.accentColor,
                  color: '#ffffff',
                  padding: '14px 24px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {isDynamik ? tr('navBookNow', lang) : tr('navGetQuote', lang)}
              </a>
            </div>

            {/* Lang toggle */}
            <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'center' }}>
              <LanguageToggle lang={lang} onToggle={onToggleLang} theme="light" />
            </div>
          </div>
        </div>
      )}

      {/* ── CSS for responsive show/hide ── */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .utility-promo { display: none !important; }
        }
        @media (max-width: 480px) {
          .utility-left span:nth-child(2) { display: none; }
        }
        nav a:hover, nav button:hover {
          color: ${shop.accentColor} !important;
        }
        .mega-item:hover {
          background: #fafaf8;
        }
      `}</style>
    </>
  );
}

const megaDropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  background: '#ffffff',
  borderRadius: '0 0 8px 8px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
  border: '1px solid #e8e3d8',
  borderTop: 'none',
  zIndex: 300,
  overflow: 'hidden',
};
