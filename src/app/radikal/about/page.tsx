'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import ShopFooter from '@/components/shop/ShopFooter';

const shop = shops.radikal;
const ACCENT = '#9e8a5a';
const SERIF = 'var(--font-cormorant), Georgia, serif';

export default function RadikalAboutPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const badges = [
    { icon: '🚔', label: lang === 'fr' ? 'Partenaire Police\nHarley-Davidson' : 'Police\nHarley-Davidson Partner' },
    { icon: '🦊', label: lang === 'fr' ? 'Revendeur officiel\nFox Racing' : 'Official Fox\nRacing Dealer' },
    { icon: '🏍️', label: lang === 'fr' ? '11+ marques\npowersports' : '11+ powersports\nbrands' },
    { icon: '⚙️', label: lang === 'fr' ? '6 types\nde véhicules' : '6 vehicle\ntypes' },
  ];

  const values = [
    {
      icon: '🔧',
      titleFr: 'La réparation d\'abord',
      titleEn: 'Repair first',
      descFr: 'On répare avant de vendre. Notre réputation est construite sur des clients qui nous font confiance depuis des années — pas sur des transactions uniques.',
      descEn: 'We fix before we sell. Our reputation is built on clients who have trusted us for years — not one-time transactions.',
    },
    {
      icon: '🚔',
      titleFr: 'La confiance de la police',
      titleEn: 'Police-grade trust',
      descFr: "Quand la flotte Harley-Davidson de la police de Gatineau tombe en panne, c'est nous qu'ils appellent. Cette confiance-là, on ne l'achète pas.",
      descEn: "When the Gatineau police Harley-Davidson fleet breaks down, we're who they call. That kind of trust can't be bought.",
    },
    {
      icon: '📦',
      titleFr: 'Stock réel, conseils réels',
      titleEn: 'Real stock, real advice',
      descFr: 'On ne commande pas tout sur commande. On stock les pièces et l\'équipement Fox Racing qu\'on utilise nous-mêmes. Quand on vous conseille quelque chose, on y croit.',
      descEn: "We don't order everything on demand. We stock the parts and Fox Racing gear we use ourselves. When we recommend something, we believe in it.",
    },
    {
      icon: '🌎',
      titleFr: 'Toutes les marques, un seul endroit',
      titleEn: 'All brands, one place',
      descFr: 'Yamaha, Kawasaki, Harley, KTM, Polaris, BRP, Honda, Suzuki, BMW, Ducati, Aprilia — on travaille sur tout ce qui a un moteur et des roues.',
      descEn: 'Yamaha, Kawasaki, Harley, KTM, Polaris, BRP, Honda, Suzuki, BMW, Ducati, Aprilia — we work on everything with a motor and wheels.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <MegaNav shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ── HERO ── */}
      <section style={{ paddingTop: 100, padding: '100px 24px 72px', background: '#f5f4f0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{ fontSize: 12, color: '#888', marginBottom: 32 }}>
            <a href="/radikal" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
              Radikal Motosport
            </a>
            <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
            <span>{lang === 'fr' ? '\u00c0 propos' : 'About'}</span>
          </nav>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
            {lang === 'fr' ? '\u00c0 PROPOS' : 'ABOUT US'}
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            {lang === 'fr'
              ? "L\u2019autorit\u00e9 powersports\nde Gatineau."
              : "Gatineau's powersports\nauthority."}
          </h1>
          <p style={{ fontSize: 17, color: '#555', lineHeight: 1.7, maxWidth: 600 }}>
            {lang === 'fr'
              ? "Radikal Motosport, c'est \u00c9ric Jean-Baptiste et une \u00e9quipe qui vit le powersports. On r\u00e9pare les motos de la police. On vend Fox Racing. On entretient 11+ marques. Pas par hasard \u2014 par passion et comp\u00e9tence."
              : "Radikal Motosport is \u00c9ric Jean-Baptiste and a team that lives powersports. We repair police motorcycles. We sell Fox Racing. We service 11+ brands. Not by accident \u2014 by passion and expertise."}
          </p>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section style={{ padding: '64px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="about-badges">
            {badges.map(b => (
              <div
                key={b.icon}
                style={{
                  background: '#f5f4f0',
                  border: '1px solid #e8e3d8',
                  borderRadius: 12,
                  padding: '24px 16px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{b.icon}</div>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#0a0a0a', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POLICE TRUST CALLOUT ── */}
      <section
        style={{
          padding: '64px 24px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="police-grid">
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
              {lang === 'fr' ? 'CONFIANCE INSTITUTIONNELLE' : 'INSTITUTIONAL TRUST'}
            </p>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                fontWeight: 300,
                color: '#ffffff',
                fontFamily: SERIF,
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {lang === 'fr' ? 'Assez fiable\npour la police.' : 'Reliable enough\nfor the police.'}
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
              {lang === 'fr'
                ? "Radikal Motosport est le partenaire officiel de la police pour l'entretien et la r\u00e9paration des motos Harley-Davidson de flotte. Cette responsabilit\u00e9 repr\u00e9sente notre engagement envers l'excellence technique."
                : "Radikal Motosport is the official police partner for maintenance and repair of fleet Harley-Davidson motorcycles. This responsibility represents our commitment to technical excellence."}
            </p>
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 14,
              padding: '32px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 56, marginBottom: 16 }}>🚔</div>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#ffffff', marginBottom: 6 }}>
              {lang === 'fr' ? 'Contrat exclusif' : 'Exclusive contract'}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
              {lang === 'fr' ? 'Harley-Davidson flotte polici\u00e8re\nGatineau, QC' : 'Harley-Davidson police fleet\nGatineau, QC'}
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '72px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>
            {lang === 'fr' ? 'NOS VALEURS' : 'OUR VALUES'}
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 42px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 40,
            }}
          >
            {lang === 'fr' ? 'Ce qui nous distingue.' : 'What sets us apart.'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="values-grid">
            {values.map(v => (
              <div
                key={v.icon}
                style={{
                  background: '#fafaf8',
                  border: '1px solid #e8e3d8',
                  borderRadius: 12,
                  padding: '28px 24px',
                }}
              >
                <span style={{ fontSize: 28, display: 'block', marginBottom: 12 }}>{v.icon}</span>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 8 }}>
                  {lang === 'fr' ? v.titleFr : v.titleEn}
                </h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>
                  {lang === 'fr' ? v.descFr : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '64px 24px', background: '#f5f4f0', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: '#0a0a0a', fontFamily: SERIF, marginBottom: 16 }}>
            {lang === 'fr' ? 'Venez nous voir.' : 'Come see us.'}
          </h2>
          <p style={{ fontSize: 15, color: '#555', marginBottom: 28 }}>
            156 De Varennes, Gatineau, QC J8T 8G4
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:8195616686" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: ACCENT, color: '#fff', padding: '13px 28px', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              📞 819-561-6686
            </a>
            <a href="/radikal/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff', border: '1px solid #e8e3d8', color: '#0a0a0a', padding: '13px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              {lang === 'fr' ? 'Heures & adresse' : 'Hours & address'} →
            </a>
          </div>
        </div>
      </section>

      <ShopFooter shop={shop} lang={lang} />

      <style>{`
        @media (max-width: 640px) {
          .about-badges { grid-template-columns: 1fr 1fr !important; }
          .police-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
