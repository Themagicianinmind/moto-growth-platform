'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang } from '@/lib/i18n';
import { ServicePageData } from '@/lib/service-pages';
import MegaNav from '@/components/shared/MegaNav';
import Footer from '@/components/shared/Footer';

// ─── Design tokens ────────────────────────────────────────────────────────────
const SERIF = 'var(--font-cormorant), Georgia, serif';

interface ServicePageProps {
  data: ServicePageData;
}

export default function ServicePage({ data }: ServicePageProps) {
  const [lang, setLang] = useState<Lang>('fr');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const shop = shops[data.shopId];
  const ACCENT = shop.accentColor;

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const shopName = lang === 'fr' ? shop.nameFr : shop.nameEn;
  const parentHref = data.shopId === 'dynamik' ? '/dynamik' : '/radikal';

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif' }}>

      {/* ── NAVIGATION ── */}
      <MegaNav shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ── BREADCRUMB ── */}
      <div
        style={{
          paddingTop: 108,
          padding: '108px 24px 0',
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        <nav style={{ fontSize: 12, color: '#888' }}>
          <a href={parentHref} style={{ color: ACCENT, textDecoration: 'none', fontWeight: 600 }}>
            {shopName}
          </a>
          <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
          <span style={{ color: '#888' }}>
            {lang === 'fr' ? 'Services' : 'Services'}
          </span>
          <span style={{ margin: '0 8px', color: '#ccc' }}>/</span>
          <span style={{ color: '#555', fontWeight: 600 }}>
            {lang === 'fr' ? data.hero.eyebrowFr : data.hero.eyebrowEn}
          </span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 24px',
          background: 'linear-gradient(135deg, #f5f4f0 0%, #fafaf8 100%)',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: ACCENT,
              marginBottom: 16,
            }}
          >
            {lang === 'fr' ? data.hero.eyebrowFr : data.hero.eyebrowEn}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 300,
              color: '#0a0a0a',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontFamily: SERIF,
              marginBottom: 8,
            }}
          >
            {lang === 'fr' ? data.hero.headingFr : data.hero.headingEn}
          </h1>

          {/* Accent rule */}
          <div style={{ width: 48, height: 2, background: ACCENT, margin: '16px 0 20px' }} />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#555',
              lineHeight: 1.65,
              marginBottom: 32,
            }}
          >
            {lang === 'fr' ? data.hero.subFr : data.hero.subEn}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={`tel:${data.cta.phone.replace(/-/g, '')}`}
              style={{
                background: ACCENT,
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              {lang === 'fr' ? data.cta.labelFr : data.cta.labelEn}
            </a>
            <a
              href={`tel:${data.cta.phone.replace(/-/g, '')}`}
              style={{
                background: 'transparent',
                color: '#0a0a0a',
                padding: '14px 32px',
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
                border: '1px solid #ccc',
                letterSpacing: '-0.01em',
              }}
            >
              {data.cta.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section
        style={{
          padding: 'clamp(56px, 8vw, 96px) 24px',
          background: '#ffffff',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Section header */}
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
            {lang === 'fr' ? 'CE QUI EST INCLUS' : 'WHAT\'S INCLUDED'}
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.01em',
              marginBottom: 14,
            }}
          >
            {lang === 'fr' ? 'Nos services en détail' : 'Our services in detail'}
          </h2>
          <div style={{ width: 32, height: 1, background: ACCENT, marginBottom: 40 }} />

          {/* Feature cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {data.features.map((feature, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e3d8',
                  borderRadius: 8,
                  padding: '24px 20px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: `${ACCENT}12`,
                    border: `1px solid ${ACCENT}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    color: ACCENT,
                    marginBottom: 14,
                  }}
                >
                  {i + 1}
                </div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#0a0a0a',
                    marginBottom: 8,
                  }}
                >
                  {lang === 'fr' ? feature.fr : feature.en}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: '#555',
                    lineHeight: 1.6,
                  }}
                >
                  {lang === 'fr' ? feature.detailFr : feature.detailEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section
        style={{
          padding: 'clamp(56px, 8vw, 96px) 24px',
          background: '#fafaf8',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {/* Section header */}
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
            FAQ
          </p>
          <h2
            style={{
              fontSize: 'clamp(26px, 4vw, 38px)',
              fontWeight: 300,
              color: '#0a0a0a',
              fontFamily: SERIF,
              letterSpacing: '-0.01em',
              marginBottom: 14,
            }}
          >
            {lang === 'fr' ? 'Questions fréquentes' : 'Frequently asked questions'}
          </h2>
          <div style={{ width: 32, height: 1, background: ACCENT, marginBottom: 40 }} />

          {/* Accordion items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {data.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid #e8e3d8',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: '#1a1a1a',
                        paddingRight: 16,
                      }}
                    >
                      {lang === 'fr' ? item.questionFr : item.questionEn}
                    </span>
                    <span
                      style={{
                        fontSize: 20,
                        color: ACCENT,
                        fontWeight: 300,
                        flexShrink: 0,
                        transition: 'transform 0.2s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        paddingBottom: 20,
                        paddingRight: 40,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          color: '#555',
                          lineHeight: 1.7,
                        }}
                      >
                        {lang === 'fr' ? item.answerFr : item.answerEn}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section
        style={{
          background: '#0f1a2e',
          padding: 'clamp(56px, 7vw, 80px) 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 600,
            height: 200,
            background: `radial-gradient(ellipse, ${ACCENT}22 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: `${ACCENT}88`,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            {lang === 'fr' ? 'PRENDRE RENDEZ-VOUS' : 'BOOK AN APPOINTMENT'}
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5.5vw, 56px)',
              fontWeight: 300,
              color: '#f0ede6',
              fontFamily: SERIF,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            {lang === 'fr' ? 'Prêt à rouler ?' : 'Ready to Ride?'}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 36, lineHeight: 1.6 }}>
            {lang === 'fr'
              ? "Réservez votre service dès aujourd'hui. Réponse sous 24h, garantie."
              : 'Book your service today. Response within 24h, guaranteed.'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a
              href={`tel:${data.cta.phone.replace(/-/g, '')}`}
              style={{
                background: ACCENT,
                color: '#ffffff',
                padding: '14px 36px',
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              {data.cta.phone}
            </a>
            <a
              href={parentHref + '#booking'}
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.7)',
                padding: '14px 36px',
                borderRadius: 100,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {lang === 'fr' ? 'Formulaire en ligne' : 'Online Form'}
            </a>
          </div>
        </div>
      </section>

      {/* ── JSON-LD SCHEMA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: shop.nameFr,
            description: data.meta.descriptionFr,
            telephone: data.cta.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: shop.address.split(',')[0],
              addressLocality: 'Gatineau',
              addressRegion: 'QC',
              addressCountry: 'CA',
            },
            url: `https://moto-growth-platform.vercel.app/${data.shopId}/services/${data.slug}`,
          }),
        }}
      />

      {/* ── FOOTER ── */}
      <Footer shop={shop} lang={lang} />

      {/* ── RESPONSIVE ── */}
      <style>{`
        @media (max-width: 768px) {
          section > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
