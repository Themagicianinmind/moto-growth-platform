'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import ShopFooter from '@/components/shop/ShopFooter';

const shop = shops.radikal;
const ACCENT = '#9e8a5a';
const FOX_ORANGE = '#c2410c';
const SERIF = 'var(--font-cormorant), Georgia, serif';

const categories = [
  {
    icon: '🪖',
    nameFr: 'Casques',
    nameEn: 'Helmets',
    descFr: 'Full-face, motocross, open-face — certifiés DOT & ECE',
    descEn: 'Full-face, motocross, open-face — DOT & ECE certified',
    badge: 'V3 RS · V1 · Comp',
  },
  {
    icon: '🧥',
    nameFr: 'Maillots & Pantalons',
    nameEn: 'Jerseys & Pants',
    descFr: 'Collection complète motocross et enduro — toutes tailles',
    descEn: 'Full motocross and enduro collection — all sizes',
    badge: '180 · 360 · Flexair',
  },
  {
    icon: '🧤',
    nameFr: 'Gants',
    nameEn: 'Gloves',
    descFr: 'Grip, protection des knuckles, légers ou renforcés',
    descEn: 'Grip, knuckle protection, lightweight or reinforced',
    badge: 'Dirtpaw · Ranger · Pawtector',
  },
  {
    icon: '👢',
    nameFr: 'Bottes',
    nameEn: 'Boots',
    descFr: 'Bottes homologuées MX, enduro et trail — semelle crantée',
    descEn: 'Certified MX, enduro and trail boots — lug sole',
    badge: 'Motion · Comp · Instinct',
  },
  {
    icon: '🛡️',
    nameFr: 'Protection',
    nameEn: 'Protection',
    descFr: 'Plaques dorsales, genouillères, coudières et gilets',
    descEn: 'Back plates, knee guards, elbow pads and vests',
    badge: 'Titan · Baseframe · Raptor',
  },
];

export default function FoxRacingPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <MegaNav shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ── DARK HERO ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'flex-end',
          paddingTop: 100,
          overflow: 'hidden',
          background: '#0a0a0a',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/radikal/fox-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: 0.45,
          }}
        />
        {/* Gradient overlay — bottom fade for content readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.75) 70%, #0a0a0a 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 24px 72px',
            width: '100%',
          }}
        >
          {/* Brand badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: FOX_ORANGE,
              color: '#fff',
              borderRadius: 6,
              padding: '6px 16px',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            🦊 Fox Racing
          </div>

          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 300,
              color: '#ffffff',
              fontFamily: SERIF,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: 16,
              maxWidth: 700,
            }}
          >
            {lang === 'fr'
              ? "L\u2019équipement qui ne pardonne pas."
              : 'Gear that takes no prisoners.'}
          </h1>

          <p
            style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: 520,
              lineHeight: 1.65,
              marginBottom: 36,
            }}
          >
            {lang === 'fr'
              ? 'Revendeur officiel Fox Racing à Gatineau. Casques, maillots, bottes, gants et protections — en stock, en boutique.'
              : 'Authorized Fox Racing dealer in Gatineau. Helmets, jerseys, boots, gloves and protection — in stock, in store.'}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#categories"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: FOX_ORANGE,
                color: '#fff',
                padding: '13px 28px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.02em',
                textDecoration: 'none',
              }}
            >
              {lang === 'fr' ? 'Voir les catégories' : 'Browse categories'} ↓
            </a>
            <a
              href="/radikal#booking"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '13px 28px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}
            >
              📞 {lang === 'fr' ? 'Nous contacter' : 'Contact us'}
            </a>
          </div>

          {/* Trust chips */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 28 }}>
            {[
              lang === 'fr' ? '✓ Revendeur autorisé' : '✓ Authorized Dealer',
              lang === 'fr' ? '✓ Stock en boutique' : '✓ In-store stock',
              lang === 'fr' ? '✓ Conseil expert' : '✓ Expert advice',
              lang === 'fr' ? '✓ Toutes tailles' : '✓ All sizes',
            ].map(chip => (
              <span
                key={chip}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 100,
                  padding: '4px 12px',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES GRID ── */}
      <section id="categories" style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Section header */}
          <div style={{ marginBottom: 48 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: FOX_ORANGE,
                marginBottom: 10,
              }}
            >
              {lang === 'fr' ? 'BOUTIQUE OFFICIELLE' : 'OFFICIAL BOUTIQUE'}
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 300,
                color: '#0a0a0a',
                fontFamily: SERIF,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: 14,
              }}
            >
              {lang === 'fr' ? 'Toutes les catégories' : 'All categories'}
            </h2>
            <p style={{ fontSize: 16, color: '#555', maxWidth: 520, lineHeight: 1.65 }}>
              {lang === 'fr'
                ? 'Trouvez le bon équipement pour votre discipline. Nos experts vous guident sur place.'
                : 'Find the right gear for your discipline. Our experts guide you in store.'}
            </p>
          </div>

          {/* 5-card grid — 3 top + 2 bottom centered */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
              marginBottom: 20,
            }}
            className="fox-cat-grid-top"
          >
            {categories.slice(0, 3).map(cat => (
              <CategoryCard key={cat.nameFr} cat={cat} lang={lang} />
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 20,
              maxWidth: 'calc(66.66% + 7px)',
              margin: '0 auto',
            }}
            className="fox-cat-grid-bottom"
          >
            {categories.slice(3).map(cat => (
              <CategoryCard key={cat.nameFr} cat={cat} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WE RIDE WHAT WE SELL ── */}
      <section style={{ padding: '72px 24px', background: '#f5f4f0' }}>
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: `${FOX_ORANGE}15`,
              border: `2px solid ${FOX_ORANGE}40`,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 26,
              margin: '0 auto 24px',
            }}
          >
            🏁
          </div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: FOX_ORANGE,
              marginBottom: 12,
            }}
          >
            {lang === 'fr' ? 'NOTRE PHILOSOPHIE' : 'OUR PHILOSOPHY'}
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            {lang === 'fr' ? 'On porte ce qu\'on vend.' : 'We wear what we sell.'}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#555',
              lineHeight: 1.75,
              maxWidth: 620,
              margin: '0 auto 36px',
            }}
          >
            {lang === 'fr'
              ? "L'équipe de Radikal Motosport roule. Pas en théorie — sur les sentiers, sur le circuit, en enduro. On connaît l'équipement parce qu'on l'utilise. Quand on vous recommande un casque Fox, c'est parce qu'on a testé ce casque."
              : "The Radikal Motosport team rides. Not in theory — on trails, on track, in enduro. We know the gear because we use it. When we recommend a Fox helmet, it's because we've tested that helmet."}
          </p>
          <a
            href="/radikal#booking"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#0a0a0a',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
            }}
          >
            {lang === 'fr' ? 'Parler à un expert' : 'Talk to an expert'} →
          </a>
        </div>
      </section>

      {/* ── AUTHORIZED DEALER BADGE ── */}
      <section style={{ padding: '72px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 48,
              alignItems: 'center',
            }}
            className="fox-dealer-grid"
          >
            {/* Left — text */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  marginBottom: 10,
                }}
              >
                {lang === 'fr' ? 'REVENDEUR OFFICIEL' : 'OFFICIAL DEALER'}
              </p>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3.5vw, 40px)',
                  fontWeight: 300,
                  color: '#0a0a0a',
                  fontFamily: SERIF,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: 18,
                }}
              >
                {lang === 'fr'
                  ? 'Seul revendeur Fox Racing à Gatineau'
                  : 'Gatineau\'s exclusive Fox Racing dealer'}
              </h2>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 28 }}>
                {lang === 'fr'
                  ? 'Radikal Motosport est le point de vente officiel Fox Racing pour la région de Gatineau-Ottawa. Stock complet, produits authentiques, garantie fabricant.'
                  : 'Radikal Motosport is the official Fox Racing point of sale for the Gatineau-Ottawa region. Full stock, authentic products, manufacturer warranty.'}
              </p>

              {/* Dealer credentials */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  {
                    icon: '🏅',
                    label: lang === 'fr' ? 'Revendeur autorisé officiel' : 'Official authorized dealer',
                  },
                  {
                    icon: '📦',
                    label: lang === 'fr' ? 'Produits 100 % authentiques' : '100% authentic products',
                  },
                  {
                    icon: '🔄',
                    label: lang === 'fr' ? 'Garantie et retours selon politique Fox' : 'Returns & warranty per Fox policy',
                  },
                  {
                    icon: '🎯',
                    label: lang === 'fr' ? 'Conseil d\'ajustement personnalisé' : 'Personalized fit advice',
                  },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: 14, color: '#1a1a1a', fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — dealer badge card */}
            <div
              style={{
                background: '#0a0a0a',
                borderRadius: 16,
                padding: '48px 32px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative orange glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 200,
                  height: 200,
                  background: FOX_ORANGE,
                  borderRadius: '50%',
                  opacity: 0.08,
                  filter: 'blur(40px)',
                }}
              />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  background: FOX_ORANGE,
                  borderRadius: 16,
                  fontSize: 40,
                  marginBottom: 20,
                }}
              >
                🦊
              </div>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  marginBottom: 6,
                }}
              >
                Fox Racing
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.6)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 28,
                }}
              >
                {lang === 'fr' ? 'Revendeur Autorisé' : 'Authorized Dealer'}
              </p>
              <div
                style={{
                  background: FOX_ORANGE,
                  color: '#fff',
                  borderRadius: 100,
                  padding: '10px 24px',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  display: 'inline-block',
                  marginBottom: 20,
                }}
              >
                {lang === 'fr' ? '✓ Certification officielle' : '✓ Official Certification'}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.6,
                }}
              >
                156 De Varennes, Gatineau
                <br />
                819-561-6686
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section
        style={{
          padding: '72px 24px',
          background: '#0a0a0a',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: FOX_ORANGE,
              marginBottom: 12,
            }}
          >
            {lang === 'fr' ? 'EN BOUTIQUE DÈS MAINTENANT' : 'IN STORE NOW'}
          </p>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 300,
              color: '#ffffff',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {lang === 'fr' ? 'Venez essayer avant d\'acheter.' : 'Try before you buy.'}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 36 }}>
            {lang === 'fr'
              ? 'Le bon équipement, c\'est celui qui vous va. Nos experts vous aident à trouver la taille et le modèle qui correspondent à votre usage.'
              : "The right gear is the gear that fits. Our experts help you find the size and model that matches your riding style."}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:8195616686"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: FOX_ORANGE,
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              📞 819-561-6686
            </a>
            <a
              href="/radikal"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                padding: '14px 32px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              {lang === 'fr' ? '← Retour à Radikal' : '← Back to Radikal'}
            </a>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 24 }}>
            156 De Varennes, Gatineau, QC J8T 8G4
          </p>
        </div>
      </section>

      <ShopFooter shop={shop} lang={lang} />

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 720px) {
          .fox-cat-grid-top { grid-template-columns: 1fr !important; }
          .fox-cat-grid-bottom { grid-template-columns: 1fr !important; max-width: 100% !important; }
          .fox-dealer-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .fox-cat-grid-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ── Category card ──────────────────────────────────────────────────────────────

interface CatProps {
  cat: typeof categories[number];
  lang: Lang;
}

function CategoryCard({ cat, lang }: CatProps) {
  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e8e3d8',
        borderRadius: 14,
        padding: '28px 24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.2s, transform 0.2s',
        cursor: 'default',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          background: `${FOX_ORANGE}12`,
          border: `1px solid ${FOX_ORANGE}25`,
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
          marginBottom: 16,
        }}
      >
        {cat.icon}
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: 18,
          fontWeight: 400,
          color: '#0a0a0a',
          fontFamily: SERIF,
          marginBottom: 6,
          letterSpacing: '-0.01em',
        }}
      >
        {lang === 'fr' ? cat.nameFr : cat.nameEn}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 13, color: '#666', lineHeight: 1.55, marginBottom: 16 }}>
        {lang === 'fr' ? cat.descFr : cat.descEn}
      </p>

      {/* Model badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          background: '#f5f4f0',
          border: '1px solid #e8e3d8',
          borderRadius: 6,
          padding: '4px 10px',
          fontSize: 11,
          fontWeight: 600,
          color: '#555',
          letterSpacing: '0.02em',
        }}
      >
        {cat.badge}
      </div>

      {/* In-store indicator */}
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span
          style={{
            width: 7,
            height: 7,
            background: '#16a34a',
            borderRadius: '50%',
            display: 'inline-block',
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 12, color: '#16a34a', fontWeight: 600 }}>
          {lang === 'fr' ? 'En stock en boutique' : 'In-store stock'}
        </span>
      </div>
    </div>
  );
}
