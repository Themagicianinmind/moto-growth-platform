'use client';

import { useState, useEffect } from 'react';
import { shops } from '@/lib/shops';
import { Lang, tr } from '@/lib/i18n';
import MegaNav from '@/components/shared/MegaNav';
import Footer from '@/components/shared/Footer';
import StatsStrip from '@/components/shared/StatsStrip';
import ServiceCard from '@/components/shared/ServiceCard';
import SectionHeader from '@/components/ui/SectionHeader';
import BookingForm from '@/components/shop/BookingForm';
import ReviewCards from '@/components/shop/ReviewCards';
import FinancingSection from '@/components/shop/FinancingSection';

const shop = shops.dynamik;

// ─── Design tokens ────────────────────────────────────────────────────────────
const SERIF = 'var(--font-cormorant), Georgia, serif';
const ACCENT = shop.accentColor; // #2563eb

export default function DynamikPage() {
  const [lang, setLang] = useState<Lang>('fr');
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('moto-lang') as Lang | null;
    if (saved === 'en') setLang('en');
  }, []);

  const handleLangToggle = (l: Lang) => {
    setLang(l);
    localStorage.setItem('moto-lang', l);
  };

  const vespaModels = shop.vespaModels ?? [];

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif' }}>

      {/* ── NAVIGATION ── */}
      <MegaNav shop={shop} lang={lang} onToggleLang={handleLangToggle} />

      {/* ── HERO — split layout ── */}
      <section
        id="hero"
        style={{
          paddingTop: 100, // offset fixed header (36 utility + 64 nav)
          minHeight: '88vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'stretch',
          background: '#ffffff',
        }}
      >
        {/* Left panel — content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)',
            background: 'linear-gradient(135deg, #f5f4f0 0%, #fafaf8 100%)',
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            <span style={trustBadgeStyle(ACCENT)}>
              {lang === 'fr' ? 'Depuis 1999' : 'Since 1999'}
            </span>
            <span style={trustBadgeStyle('#9e8a5a')}>
              {lang === 'fr' ? 'Concessionnaire Vespa & Piaggio' : 'Vespa & Piaggio Dealer'}
            </span>
            <span style={trustBadgeStyle('#555')}>
              AMO Moto
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              fontWeight: 300,
              color: '#0a0a0a',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              fontFamily: SERIF,
              marginBottom: 8,
            }}
          >
            Dynamik
            <br />
            <span style={{ color: ACCENT }}>Performance</span>
          </h1>

          {/* Accent rule */}
          <div style={{ width: 48, height: 2, background: ACCENT, margin: '16px 0 20px' }} />

          {/* Tagline */}
          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#555',
              lineHeight: 1.65,
              maxWidth: 420,
              marginBottom: 8,
            }}
          >
            {lang === 'fr'
              ? 'Réparation moto experte, vente Vespa & Piaggio — votre atelier de confiance à Gatineau.'
              : 'Expert motorcycle repair, Vespa & Piaggio sales — your trusted shop in Gatineau.'}
          </p>

          {/* 5-star */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36 }}>
            <span style={{ color: '#9e8a5a', fontSize: 16, letterSpacing: 3 }}>★★★★★</span>
            <span style={{ fontSize: 13, color: '#888', fontWeight: 600 }}>5.0 · Google</span>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href="#booking"
              style={{
                background: ACCENT,
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: 100,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'opacity 0.15s',
              }}
            >
              {lang === 'fr' ? 'Réserver maintenant' : 'Book Now'}
            </a>
            <a
              href="#vespa-models"
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
              {lang === 'fr' ? 'Explorer les Vespa' : 'Explore Vespa'}
            </a>
          </div>

          {/* Address strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px 20px',
              marginTop: 32,
              paddingTop: 24,
              borderTop: '1px solid #e8e3d8',
            }}
          >
            <a
              href={`tel:${shop.phone.replace(/-/g, '')}`}
              style={{ fontSize: 12, color: ACCENT, textDecoration: 'none', fontWeight: 600 }}
            >
              📞 {shop.phone}
            </a>
            <span style={{ fontSize: 12, color: '#888' }}>📍 {shop.address}</span>
            <span style={{ fontSize: 12, color: '#888' }}>
              🕐 {lang === 'fr' ? 'Lun–Ven 8h–17h · Sam 9h–14h' : 'Mon–Fri 8am–5pm · Sat 9am–2pm'}
            </span>
          </div>
        </div>

        {/* Right panel — Official Vespa Sprint imagery */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 400,
          }}
        >
          {/* Official Vespa Sprint photo — authorized dealer use */}
          <img
            src="/images/vespa/sprint-gallery.jpg"
            alt={lang === 'fr' ? 'Vespa Sprint — Dynamik Performance Gatineau' : 'Vespa Sprint — Dynamik Performance Gatineau'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              position: 'absolute',
              inset: 0,
            }}
          />
          {/* Dark gradient overlay for text legibility */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(10,10,10,0.55) 0%, rgba(15,26,46,0.40) 100%)',
            }}
          />

          {/* Overlay content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: '100%',
              padding: '40px 32px',
            }}
          >
            {/* Serif overlay text */}
            <p
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 300,
                color: '#f0ede6',
                fontFamily: SERIF,
                textAlign: 'center',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                marginBottom: 20,
              }}
            >
              {lang === 'fr' ? 'La gamme Vespa' : 'The Vespa Range'}
              <br />
              <span style={{ color: ACCENT, fontSize: '0.7em', fontWeight: 400, letterSpacing: '0.05em' }}>
                {lang === 'fr' ? 'à Gatineau' : 'in Gatineau'}
              </span>
            </p>
            {/* Official dealer badge */}
            <div
              style={{
                padding: '8px 20px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: 100,
                fontSize: 11,
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
              }}
            >
              {lang === 'fr' ? '★ Concessionnaire officiel Outaouais' : '★ Official Dealer Outaouais'}
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO RESPONSIVE CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          #hero {
            grid-template-columns: 1fr !important;
          }
          #hero > div:last-child {
            min-height: 300px !important;
          }
        }
      `}</style>

      {/* ── STATS STRIP ── */}
      <StatsStrip shop={shop} lang={lang} />

      {/* ── SERVICES GRID ── */}
      <section id="services" style={{ padding: 'clamp(56px, 8vw, 96px) 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader
            label={tr('ourServices', lang)}
            heading={tr('whatWeOffer', lang)}
            subtitle={tr('serviceSubtitle', lang)}
            accentColor={ACCENT}
            textColor="#0a0a0a"
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 16,
            }}
          >
            {shop.services.map(svc => (
              <ServiceCard key={svc.id} service={svc} lang={lang} accentColor={ACCENT} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VESPA SHOWCASE — FULL BLEED ── */}
      <section
        id="vespa-showcase"
        style={{
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Official Vespa GTS background image */}
        <img
          src="/images/vespa/gts-hero.jpg"
          alt="Vespa GTS — Dynamik Performance Gatineau"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />
        {/* Dark overlay — keeps text readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(15,26,46,0.75) 100%)',
          }}
        />
        {/* Decorative radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '100%',
            background: `radial-gradient(ellipse, ${ACCENT}18 0%, transparent 65%)`,
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(72px, 10vw, 120px) 24px' }}>

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: `${ACCENT}bb`,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            {tr('vespaShowcaseLabel', lang)}
          </p>

          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(44px, 7vw, 80px)',
              fontWeight: 300,
              color: '#f0ede6',
              fontFamily: SERIF,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              marginBottom: 20,
              whiteSpace: 'pre-line',
            }}
          >
            {tr('vespaShowcaseHeading', lang)}
          </h2>

          {/* Accent line */}
          <div style={{ width: 48, height: 1, background: ACCENT, margin: '0 auto 24px' }} />

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 17px)',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            {tr('vespaShowcaseSubtitle', lang)}
          </p>

          {/* CTA */}
          <a
            href="#vespa-models"
            style={{
              display: 'inline-block',
              background: ACCENT,
              color: '#ffffff',
              padding: '14px 40px',
              borderRadius: 100,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            {tr('vespaShowcaseCTA', lang)} →
          </a>
        </div>
        </div>
      </section>

      {/* ── VESPA MODELS — 3 CARDS ── */}
      <section
        id="vespa-models"
        style={{ padding: 'clamp(64px, 8vw, 96px) 24px', background: '#fafaf8' }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeader
            label={tr('vespaSectionLabel', lang)}
            heading={tr('vespaSectionHeading', lang)}
            subtitle={tr('vespaSectionSubtitle', lang)}
            accentColor={ACCENT}
            textColor="#0a0a0a"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 24,
              marginBottom: 32,
            }}
          >
            {vespaModels.map(model => (
              <div
                key={model.id}
                onMouseEnter={() => setHoveredModel(model.id)}
                onMouseLeave={() => setHoveredModel(null)}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${hoveredModel === model.id ? ACCENT + '60' : '#e8e3d8'}`,
                  borderRadius: 8,
                  overflow: 'hidden',
                  boxShadow: hoveredModel === model.id
                    ? '0 8px 32px rgba(37,99,235,0.12)'
                    : '0 1px 4px rgba(0,0,0,0.05)',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  cursor: 'pointer',
                }}
              >
                {/* Official Vespa imagery — authorized dealer */}
                <div
                  style={{
                    height: 220,
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#f5f4f0',
                  }}
                >
                  <img
                    src={`/images/vespa/${model.id}-hero.jpg`}
                    alt={lang === 'fr' ? model.nameFr : model.nameEn}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      transition: 'transform 0.4s ease',
                      transform: hoveredModel === model.id ? 'scale(1.06)' : 'scale(1)',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '20px 20px 24px' }}>
                  <p
                    style={{
                      fontSize: 20,
                      fontWeight: 300,
                      color: '#0a0a0a',
                      fontFamily: SERIF,
                      letterSpacing: '-0.01em',
                      marginBottom: 6,
                    }}
                  >
                    {lang === 'fr' ? model.nameFr : model.nameEn}
                  </p>
                  <p style={{ fontSize: 13, color: '#888', marginBottom: 20, lineHeight: 1.5 }}>
                    {lang === 'fr' ? model.taglineFr : model.taglineEn}
                  </p>

                  {/* Dual CTA */}
                  <div style={{ display: 'flex', gap: 8 }}>
                    <a
                      href={`/dynamik/vespa/${model.id}`}
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '9px 0',
                        background: ACCENT,
                        color: '#ffffff',
                        borderRadius: 100,
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      {tr('vespaDiscover', lang)}
                    </a>
                    <a
                      href="#booking"
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        padding: '9px 0',
                        background: 'transparent',
                        color: ACCENT,
                        border: `1px solid ${ACCENT}50`,
                        borderRadius: 100,
                        fontSize: 12,
                        fontWeight: 700,
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

          {/* See all CTA */}
          <div style={{ textAlign: 'center' }}>
            <a
              href="/dynamik/vespa"
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: ACCENT,
                textDecoration: 'none',
                borderBottom: `1px solid ${ACCENT}50`,
                paddingBottom: 2,
              }}
            >
              {tr('vespaSeeAll', lang)}
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT STEVE ── */}
      <section
        id="about"
        style={{ padding: 'clamp(64px, 8vw, 96px) 24px', background: '#ffffff' }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Photo placeholder */}
          <div
            style={{
              background: 'linear-gradient(145deg, #f5f4f0 0%, #e8e3d8 100%)',
              borderRadius: 8,
              aspectRatio: '4/5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #e8e3d8',
              position: 'relative',
            }}
          >
            <span style={{ fontSize: 72 }}>👨‍🔧</span>
            <p style={{ fontSize: 11, color: '#aaa', fontStyle: 'italic', marginTop: 12 }}>
              {lang === 'fr' ? '[ Photo de Steve à intégrer ]' : '[ Steve photo to add ]'}
            </p>
            {/* Accent corner */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${ACCENT}, transparent)`,
                borderRadius: '0 0 8px 8px',
              }}
            />
          </div>

          {/* Text content */}
          <div>
            <SectionHeader
              label={tr('aboutLabel', lang)}
              heading={tr('aboutHeading', lang)}
              subtitle={tr('aboutSubtitle', lang)}
              accentColor={ACCENT}
              textColor="#0a0a0a"
            />

            {/* Owner name */}
            <p
              style={{
                fontSize: 28,
                fontWeight: 300,
                color: '#0a0a0a',
                fontFamily: SERIF,
                letterSpacing: '-0.01em',
                marginBottom: 4,
              }}
            >
              {shop.ownerName}
            </p>
            <p style={{ fontSize: 12, color: ACCENT, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 20 }}>
              {lang === 'fr' ? 'Propriétaire · Dynamik Performance' : 'Owner · Dynamik Performance'}
            </p>

            {/* Quote */}
            <blockquote
              style={{
                borderLeft: `3px solid ${ACCENT}`,
                paddingLeft: 20,
                marginLeft: 0,
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontSize: 20,
                  color: '#1a1a1a',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  fontFamily: SERIF,
                  fontWeight: 300,
                }}
              >
                "{lang === 'fr' ? shop.ownerQuoteFr : shop.ownerQuoteEn}"
              </p>
            </blockquote>

            {/* Bio */}
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 28 }}>
              {lang === 'fr' ? shop.ownerBioFr : shop.ownerBioEn}
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              {['🛵 Concessionnaire Vespa & Piaggio', '✅ Membre AMO Moto', '📅 Depuis 1999'].map(badge => (
                <span key={badge} style={aboutBadgeStyle(ACCENT)}>
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
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
                textDecoration: 'none',
              }}
            >
              {lang === 'fr' ? 'Prendre rendez-vous' : 'Book an Appointment'} →
            </a>
          </div>
        </div>

        {/* About responsive CSS */}
        <style>{`
          @media (max-width: 768px) {
            #about > div > div:first-child + div {
              padding: 0;
            }
            #about > div {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* ── BOOKING CTA STRIP ── */}
      <section
        id="booking-cta"
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
            {tr('bookingCTALabel', lang)}
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
            {tr('bookingCTAHeading', lang)}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 36, lineHeight: 1.6 }}>
            {tr('bookingCTASubtitle', lang)}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a
              href={`tel:${shop.phone.replace(/-/g, '')}`}
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
              📞 {shop.phone}
            </a>
            <a
              href="#booking"
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
              {tr('bookingCTAForm', lang)}
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <FinancingSection shop={shop} lang={lang} />
      <ReviewCards shop={shop} lang={lang} />

      {/* ── BOOKING FORM ── */}
      <BookingForm shop={shop} lang={lang} />

      {/* ── FOOTER ── */}
      <Footer shop={shop} lang={lang} />
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function trustBadgeStyle(color: string): React.CSSProperties {
  return {
    background: `${color}10`,
    border: `1px solid ${color}35`,
    borderRadius: 100,
    padding: '4px 14px',
    fontSize: 11,
    fontWeight: 700,
    color: color,
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
  };
}

function aboutBadgeStyle(accentColor: string): React.CSSProperties {
  return {
    background: `${accentColor}10`,
    border: `1px solid ${accentColor}30`,
    borderRadius: 6,
    padding: '6px 14px',
    fontSize: 12,
    fontWeight: 600,
    color: accentColor,
  };
}
