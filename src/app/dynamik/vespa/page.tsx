'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import ShopNavbar from '@/components/shop/ShopNavbar';
import ShopFooter from '@/components/shop/ShopFooter';

const shop = shops.dynamik;
const ACCENT = '#2563eb';
const SERIF = 'var(--font-cormorant), Georgia, serif';

interface VespaModel {
  id: string;
  nameFr: string;
  nameEn: string;
  taglineFr: string;
  taglineEn: string;
  heroImg: string;
  galleryImg: string;
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
    fuel: string;
    weight: string;
  };
  descFr: string;
  descEn: string;
  price: string;
}

const MODELS: VespaModel[] = [
  {
    id: 'sprint',
    nameFr: 'Vespa Sprint',
    nameEn: 'Vespa Sprint',
    taglineFr: 'Élégance compacte pour la ville',
    taglineEn: 'Compact elegance for the city',
    heroImg: '/images/vespa/sprint-hero.jpg',
    galleryImg: '/images/vespa/sprint-gallery.jpg',
    specs: {
      engine: '125 cc / 150 cc',
      power: '9,6 kW (150 cc)',
      topSpeed: '100 km/h',
      fuel: '7,5 L',
      weight: '132 kg',
    },
    descFr: "La Vespa Sprint incarne l'élégance urbaine avec une silhouette racée et sportive. Idéale pour la ville, elle combine agilité et style avec une finition haut de gamme.",
    descEn: 'The Vespa Sprint embodies urban elegance with a sleek, sporty silhouette. Ideal for city riding, it combines agility and style with premium finish.',
    price: 'À partir de 5 199 $',
  },
  {
    id: 'primavera',
    nameFr: 'Vespa Primavera',
    nameEn: 'Vespa Primavera',
    taglineFr: 'Légèreté et style au quotidien',
    taglineEn: 'Lightness and everyday style',
    heroImg: '/images/vespa/primavera-hero.jpg',
    galleryImg: '/images/vespa/primavera-gallery.jpg',
    specs: {
      engine: '50 cc / 125 cc / 150 cc',
      power: '8,5 kW (150 cc)',
      topSpeed: '95 km/h',
      fuel: '7,0 L',
      weight: '128 kg',
    },
    descFr: "La Vespa Primavera est la scooter iconique par excellence — légère, maniable et intemporelle. Le choix parfait pour naviguer en ville avec une élégance naturelle.",
    descEn: 'The Vespa Primavera is the iconic scooter par excellence — light, nimble, and timeless. The perfect choice for navigating the city with natural elegance.',
    price: 'À partir de 4 799 $',
  },
  {
    id: 'gts',
    nameFr: 'Vespa GTS',
    nameEn: 'Vespa GTS',
    taglineFr: 'Le prestige à grande vitesse',
    taglineEn: 'Prestige at full speed',
    heroImg: '/images/vespa/gts-hero.jpg',
    galleryImg: '/images/vespa/gts-gallery.jpg',
    specs: {
      engine: '278 cc / 300 cc',
      power: '17,4 kW (300 cc)',
      topSpeed: '130 km/h',
      fuel: '8,5 L',
      weight: '168 kg',
    },
    descFr: 'La Vespa GTS est le summum du prestige et de la performance. Avec son moteur 300 cc HPE, elle offre une puissance remarquable dans un design classique et raffiné.',
    descEn: 'The Vespa GTS is the pinnacle of prestige and performance. With its 300cc HPE engine, it offers remarkable power in a classic, refined design.',
    price: 'À partir de 8 499 $',
  },
];

export default function VespaPage() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const whyPoints: Array<{ icon: string; key: 'vespaWhyPoint1' | 'vespaWhyPoint2' | 'vespaWhyPoint3' | 'vespaWhyPoint4' | 'vespaWhyPoint5' }> = [
    { icon: '🛵', key: 'vespaWhyPoint1' },
    { icon: '🔧', key: 'vespaWhyPoint2' },
    { icon: '✅', key: 'vespaWhyPoint3' },
    { icon: '💳', key: 'vespaWhyPoint4' },
    { icon: '🏆', key: 'vespaWhyPoint5' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      <ShopNavbar shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ─── HERO ─────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(160deg, #f5f4f0 0%, #fafaf8 60%, #f0ede6 100%)',
          padding: 'clamp(88px, 12vw, 120px) 20px 64px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${ACCENT}0c 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: ACCENT,
            marginBottom: 16,
            position: 'relative',
          }}
        >
          {tr('vespaPageHeroLabel', lang)}
        </p>
        <h1
          style={{
            fontSize: 'clamp(36px, 8vw, 64px)',
            fontWeight: 300,
            color: '#0a0a0a',
            fontFamily: SERIF,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            marginBottom: 16,
            position: 'relative',
          }}
        >
          {tr('vespaPageTitle', lang)}
        </h1>
        <div style={{ width: 48, height: 1, background: ACCENT, margin: '0 auto 20px', position: 'relative' }} />
        <p
          style={{
            fontSize: 15,
            color: '#666',
            maxWidth: 520,
            margin: '0 auto 20px',
            lineHeight: 1.6,
            position: 'relative',
          }}
        >
          {tr('vespaPageSubtitle', lang)}
        </p>
        <span
          style={{
            display: 'inline-block',
            background: `${ACCENT}10`,
            border: `1px solid ${ACCENT}30`,
            borderRadius: 100,
            padding: '5px 18px',
            fontSize: 12,
            fontWeight: 700,
            color: ACCENT,
          }}
        >
          {tr('vespaOfficialDealer', lang)}
        </span>

        {/* Back link */}
        <div style={{ marginTop: 28, position: 'relative' }}>
          <a
            href="/dynamik"
            style={{ fontSize: 12, color: '#888', textDecoration: 'none' }}
          >
            {tr('vespaBackToShop', lang)}
          </a>
        </div>
      </section>

      {/* ─── MODEL CARDS ──────────────────────────── */}
      <section style={{ padding: '72px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {MODELS.map((model, idx) => (
              <div
                key={model.id}
                className="vespa-model-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 48,
                  alignItems: 'center',
                  borderBottom: idx < MODELS.length - 1 ? '1px solid #e8e3d8' : 'none',
                  paddingBottom: idx < MODELS.length - 1 ? 56 : 0,
                }}
              >
                {/* Image — alternates left/right */}
                <div
                  style={{
                    order: idx % 2 === 0 ? 0 : 1,
                    borderRadius: 14,
                    overflow: 'hidden',
                    position: 'relative',
                    height: 380,
                    background: '#f5f4f0',
                  }}
                >
                  <img
                    src={model.heroImg}
                    alt={lang === 'fr' ? model.nameFr : model.nameEn}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>
                    {lang === 'fr' ? model.taglineFr : model.taglineEn}
                  </p>
                  <h2
                    style={{
                      fontSize: 'clamp(28px, 4vw, 42px)',
                      fontWeight: 300,
                      color: '#0a0a0a',
                      fontFamily: SERIF,
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {lang === 'fr' ? model.nameFr : model.nameEn}
                  </h2>
                  <div style={{ width: 36, height: 1, background: ACCENT, marginBottom: 16 }} />

                  <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
                    {lang === 'fr' ? model.descFr : model.descEn}
                  </p>

                  {/* Specs grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 8,
                      marginBottom: 24,
                    }}
                  >
                    {(
                      [
                        { labelKey: 'vespaSpecEngine' as const, value: model.specs.engine },
                        { labelKey: 'vespaSpecPower' as const, value: model.specs.power },
                        { labelKey: 'vespaSpecTopSpeed' as const, value: model.specs.topSpeed },
                        { labelKey: 'vespaSpecFuel' as const, value: model.specs.fuel },
                        { labelKey: 'vespaSpecWeight' as const, value: model.specs.weight },
                      ] as const
                    ).map((spec) => (
                      <div
                        key={spec.labelKey}
                        style={{
                          background: '#fafaf8',
                          border: '1px solid #e8e3d8',
                          borderRadius: 8,
                          padding: '10px 12px',
                        }}
                      >
                        <p style={{ fontSize: 10, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
                          {tr(spec.labelKey, lang)}
                        </p>
                        <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a' }}>{spec.value}</p>
                      </div>
                    ))}
                    <div
                      style={{
                        background: `${ACCENT}08`,
                        border: `1px solid ${ACCENT}25`,
                        borderRadius: 8,
                        padding: '10px 12px',
                      }}
                    >
                      <p style={{ fontSize: 10, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>
                        {lang === 'fr' ? 'Prix indicatif' : 'Starting price'}
                      </p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: ACCENT }}>
                        {lang === 'fr' ? model.price : model.price.replace('À partir de', 'From')}
                      </p>
                    </div>
                  </div>

                  {/* Dual CTA */}
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <a
                      href={`/dynamik/vespa/${model.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background: ACCENT,
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: 100,
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textDecoration: 'none',
                      }}
                    >
                      {tr('vespaDiscover', lang)} →
                    </a>
                    <a
                      href="#contact-form"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        background: 'transparent',
                        border: `1px solid ${ACCENT}50`,
                        color: ACCENT,
                        padding: '12px 24px',
                        borderRadius: 100,
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        textDecoration: 'none',
                      }}
                    >
                      {tr('vespaRequestInfo', lang)}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY BUY FROM US ──────────────────────── */}
      <section
        id="contact-form"
        style={{
          background: '#f5f4f0',
          padding: '72px 20px',
          borderTop: '1px solid #e8e3d8',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>
              {tr('vespaWhyLabel', lang)}
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 300,
                color: '#0a0a0a',
                fontFamily: SERIF,
                marginBottom: 0,
              }}
            >
              {tr('vespaWhyHeading', lang)}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 16,
              marginBottom: 48,
            }}
          >
            {whyPoints.map((pt) => (
              <div
                key={pt.key}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  background: '#ffffff',
                  border: '1px solid #e8e3d8',
                  borderRadius: 12,
                  padding: '18px 20px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: `${ACCENT}10`,
                    border: `1px solid ${ACCENT}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {pt.icon}
                </div>
                <p style={{ fontSize: 14, color: '#1a1a1a', fontWeight: 500, lineHeight: 1.5, paddingTop: 4 }}>
                  {tr(pt.key, lang)}
                </p>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div
            style={{
              background: ACCENT,
              borderRadius: 14,
              padding: '28px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div>
              <p style={{ fontSize: 20, fontWeight: 300, color: '#ffffff', fontFamily: SERIF, marginBottom: 4 }}>
                {lang === 'fr' ? 'Questions sur la gamme Vespa ?' : 'Questions about the Vespa range?'}
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                {lang === 'fr' ? 'Steve répond rapidement. Appelez ou réservez une visite.' : 'Steve responds quickly. Call or book a visit.'}
              </p>
            </div>
            <a
              href={`tel:${shop.phone.replace(/-/g, '')}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                color: ACCENT,
                padding: '12px 24px',
                borderRadius: 100,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                flexShrink: 0,
              }}
            >
              📞 {shop.phone}
            </a>
          </div>
        </div>
      </section>

      <ShopFooter shop={shop} lang={lang} />

      <style>{`
        @media (max-width: 720px) {
          .vespa-model-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .vespa-model-row > div { order: unset !important; }
        }
      `}</style>
    </div>
  );
}
